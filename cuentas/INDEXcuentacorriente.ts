import { Cuenta } from "./cuentacorriente";

const cuentaCorriente = new Cuenta(500, 3);
cuentaCorriente.imprimir();

cuentaCorriente.consignar(200);
cuentaCorriente.retirar(800);
cuentaCorriente.extractoMensual();
cuentaCorriente.imprimir();