import { Cuenta } from "./cuenta ";
// Ejemplo de uso
let cuenta = new Cuenta(1000, 3);
cuenta.imprimir();

cuenta.consignar(500);
cuenta.retirar(200);

cuenta.extractoMensual();
