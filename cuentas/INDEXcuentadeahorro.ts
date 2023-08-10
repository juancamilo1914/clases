import { Cuenta } from "./cuenta de ahorros";


let cuentaAhorros = new Cuenta(9000, 3);
cuentaAhorros.imprimir();

cuentaAhorros.consignar(2000);
cuentaAhorros.retirar(1500);
cuentaAhorros.retirar(2000);
cuentaAhorros.retirar(3000);
cuentaAhorros.retirar(500);
cuentaAhorros.extractoMensual();
