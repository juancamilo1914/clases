import { Pelicula } from "./pelicula";

export class Cartelera {
    private peliculas: Pelicula[];

    constructor() {
        this.peliculas = [];
    }

    public agregarPelicula(pelicula: Pelicula): void {
        this.peliculas.push(pelicula);
    }

    public mostrarCarteleraDisponible(): void {
        console.log("Películas disponibles:");
        for (const pelicula of this.peliculas) {
        }
    }
}