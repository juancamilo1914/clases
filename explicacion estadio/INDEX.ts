import {estadio} from "./estadio";
import {detallesdelestadio} from "./Detalllesdelestadio";


let detallesjuanitoalcachofa = new detallesdelestadio(1,100000,100,500,200)
let detallesmonserrate = new detallesdelestadio(1,100000,100,500,200)
let estadiojuanitoalcachofa = new estadio(1,"estadio de juanito alcachofa","popayán",detallesjuanitoalcachofa)

let estadiomonserrate = new estadio(2,"estadio monserrate","cali",detallesmonserrate)


estadiojuanitoalcachofa.getdetallesdelestadio()
estadiomonserrate.getdetallesdelestadio()