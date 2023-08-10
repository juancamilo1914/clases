export class Cuenta {
    protected saldo: number;
    protected nConsignaciones: number;
    protected nRetiros: number;
    protected tasaAnual: number;
    protected comisionMensual: number;

    constructor(saldoInicial: number, tasaAnual: number) {
        this.saldo = saldoInicial;
        this.nConsignaciones = 0;
        this.nRetiros = 0;
        this.tasaAnual = tasaAnual;
        this.comisionMensual = 0;
    }

    consignar(cantidad: number): void {
        if (cantidad > 0) {
            this.saldo += cantidad;
            this.nConsignaciones++;
            console.log("Consignación exitosa.");
        }
    }

    retirar(cantidad: number): void {
        if (cantidad > 0 && cantidad <= this.saldo) {
            this.saldo -= cantidad;
            this.nRetiros++;
            console.log("Retiro exitoso.");
        } else {
            console.log("Error en el retiro. Fondos insuficientes.");
        }
    }

    protected calcularInteresMensual(): void {
        let interesMensual = (this.saldo * this.tasaAnual) / 12 / 100;
        this.saldo += interesMensual;
    }

    extractoMensual(): void {
        this.saldo -= this.comisionMensual;
        this.calcularInteresMensual();
        console.log("Extracto mensual:");
        this.imprimir();
    }

    imprimir(): void {
        console.log(`Saldo: ${this.saldo}`);
        console.log(`Número de consignaciones: ${this.nConsignaciones}`);
        console.log(`Número de retiros: ${this.nRetiros}`);
        console.log(`Tasa anual: ${this.tasaAnual}%`);
        console.log(`Comisión mensual: ${this.comisionMensual}`);
    }
}

class CuentaDeAhorros extends Cuenta {
    private activa: boolean;

    constructor(saldoInicial: number, tasaAnual: number) {
        super(saldoInicial, tasaAnual);
        this.activa = this.saldo >= 10000;
    }

    consignar(cantidad: number): void {
        if (this.activa) {
            super.consignar(cantidad);
        } else {
            console.log("La cuenta de ahorros está inactiva. No se puede consignar.");
        }
    }

    retirar(cantidad: number): void {
        if (this.activa) {
            super.retirar(cantidad);
        } else {
            console.log("La cuenta de ahorros está inactiva. No se puede retirar.");
        }
    }

    extractoMensual(): void {
        if (this.nRetiros > 4) {
            this.comisionMensual = (this.nRetiros - 4) * 1000;
        }
        super.extractoMensual();
        this.activa = this.saldo >= 10000;
        console.log(`Cuenta activa: ${this.activa}`);
    }

    imprimir(): void {
        console.log("Estado de la cuenta de ahorros:");
        super.imprimir();
    }
}
