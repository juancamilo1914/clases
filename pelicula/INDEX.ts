import { Tipo } from "./genero";

import { Pelicula } from "./pelicula";

import { Cartelera } from "./cartelera";

let Pelicula1 = new Pelicula("the mask", "chaux", new Tipo(12,"horror") ,10000,2005,10,true);
console.log(Pelicula1.obtenerValoracion());
let Pelicula2= new Pelicula("Tikerbel","Luis",new Tipo(13,"infantil"),20000,2000,10,false);
console.log(Pelicula2.obtenerValoracion());
let Pelicula3 = new Pelicula("The Avengers","juan",new Tipo(15,"accion"),20000,2023,5,false);
let cartelera = new Cartelera();

cartelera.agregarPelicula(Pelicula1);

cartelera.agregarPelicula(Pelicula2);

cartelera.agregarPelicula(Pelicula3);

Pelicula1.alquilar();

Pelicula2.alquilar();

Pelicula1.devolver();

Pelicula2.devolver();

Pelicula1.alquilar();

Pelicula3.alquilar();

cartelera.mostrarCarteleraDisponible();