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
        if (cantidad > 0) {
            this.saldo -= cantidad;
            this.nRetiros++;
            console.log("Retiro exitoso.");
        } else {
            console.log("Error en el retiro. Cantidad inválida.");
        }
    }

    protected calcularInteresMensual(): void {
        const interesMensual = (this.saldo * this.tasaAnual) / 12 / 100;
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

class CuentaCorriente extends Cuenta {
    private sobregiro: number;

    constructor(saldoInicial: number, tasaAnual: number) {
        super(saldoInicial, tasaAnual);
        this.sobregiro = 0;
    }

    retirar(cantidad: number): void {
        this.saldo -= cantidad;
        this.nRetiros++;
        this.sobregiro += Math.max(0, -this.saldo);
        console.log("Retiro exitoso.");
    }

    consignar(cantidad: number): void {
        super.consignar(cantidad);
        if (this.sobregiro > 0) {
            this.sobregiro = Math.max(0, this.sobregiro - cantidad);
        }
    }

    imprimir(): void {
        console.log("Estado de la cuenta corriente:");
        super.imprimir();
        console.log(`Sobregiro: ${this.sobregiro}`);
    }
}

