import { comandate } from "./comandante";
import { Soldado } from "./soldados";

let comandante1 = new comandate("yimerson","teniente","masculino")

let Soldadomanuel = new Soldado("manuel","12/12/2021", "masculino")
let soldadoLuis = new Soldado("luis", "21/02/2023","masculino")

comandante1.ingresarsoldado(soldadoLuis)
comandante1.ingresarsoldado(Soldadomanuel)

comandante1.mostrardatossoldados()