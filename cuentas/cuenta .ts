class cuenta {
    protected saldo: number;
    private numConsignaciones: number;
    private numRetiros: number;
    private tasaAnual: number;
    protected comisionMensual: number;

    constructor(saldo: number, tasaAnual: number) {
        this.saldo = saldo;
        this.numConsignaciones = 0;
        this.numRetiros = 0;
        this.tasaAnual = tasaAnual;
        this.comisionMensual = 0;
    }

    consignar(cantidad: number): void {
        this.saldo += cantidad;
        this.numConsignaciones++;
    }

    retirar(cantidad: number): void {
        if (cantidad <= this.saldo) {
            this.saldo -= cantidad;
            this.numRetiros++;
        } else {
            console.log("Saldo insuficiente.");
        }
    }

    calcularInteresMensual(): void {
        const interesMensual = (this.tasaAnual / 12) * this.saldo / 100;
        this.saldo += interesMensual;
    }

    extractoMensual(): void {
        this.saldo -= this.comisionMensual;
        this.calcularInteresMensual();
    }

    imprimir(): void {
        console.log("Saldo:", this.saldo);
    }
}

class CuentaAhorros extends Cuenta {
    private cuentaActiva: boolean;

    constructor(saldo: number, tasaAnual: number) {
        super(saldo, tasaAnual);
        this.cuentaActiva = saldo >= 10000;
    }

    consignar(cantidad: number): void {
        if (this.cuentaActiva) {
            super.consignar(cantidad);
        } else {
            console.log("La cuenta de ahorros está inactiva.");
        }
    }

    retirar(cantidad: number): void {
        if (this.cuentaActiva) {
            super.retirar(cantidad);
        } else {
            console.log("La cuenta de ahorros está inactiva.");
        }
    }

    extractoMensual(): void {
        if (this.numRetiros > 4) {
            this.comisionMensual += (this.numRetiros - 4) * 1000;
        }
        super.extractoMensual();
        this.cuentaActiva = this.saldo >= 10000;
    }

    imprimir(): void {
        super.imprimir();
        console.log("Comisión Mensual:", this.comisionMensual);
        console.log("Número de transacciones:", this.numConsignaciones + this.numRetiros);
    }
}

class CuentaCorriente extends Cuenta {
    private sobregiro: number;

    constructor(saldo: number, tasaAnual: number) {
        super(saldo, tasaAnual);
        this.sobregiro = 0;
    }

    retirar(cantidad: number): void {
        if (cantidad <= this.saldo + this.sobregiro) {
            if (cantidad <= this.saldo) {
                this.saldo -= cantidad;
            } else {
                this.sobregiro -= (cantidad - this.saldo);
                this.saldo = 0;
            }
            this.numRetiros++;
        } else {
            console.log("Saldo insuficiente.");
        }
    }

    consignar(cantidad: number): void {
        if (this.sobregiro > 0) {
            if (cantidad >= this.sobregiro) {
                cantidad -= this.sobregiro;
                this.sobregiro = 0;
            } else {
                this.sobregiro -= cantidad;
                cantidad = 0;
            }
        }
        super.consignar(cantidad);
    }

    imprimir(): void {
        super.imprimir();
        console.log("Sobregiro:", this.sobregiro);
        console.log("Comisión Mensual:", this.comisionMensual);
        console.log("Número de transacciones:", this.numConsignaciones + this.numRetiros);
    }
}

export { Cuenta, CuentaAhorros, CuentaCorriente };
