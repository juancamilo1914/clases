import { Tipo } from "./genero";
import { Pelicula } from "./pelicula";

let Peliculaepica = new Pelicula("the mask", "chaux", new Tipo(12,"horror") ,10000,2005,10);
console.log(Peliculaepica.obtenerValoracion());
let peliculaNoEpica = new Pelicula("Tikerbel","Luis",new Tipo(13,"infantil"),20000,2000,9);
console.log(peliculaNoEpica.obtenerValoracion());