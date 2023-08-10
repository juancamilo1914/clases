export class Cuenta {
    private saldo: number;
    private nConsignaciones: number;
    private nRetiros: number;
    private tasaAnual: number;
    private comisionMensual: number;

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

    private calcularInteresMensual(): void {
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
