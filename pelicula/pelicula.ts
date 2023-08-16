import { Tipo } from "./genero"

export class Pelicula {
 
    private nombre:string
    private director:string
    private genero:Tipo
    private duracion:number
    private año:number
    private calificacion:number
    private disponible: boolean;
    private peliculas: Pelicula[];


    constructor(nombre:string ,director:string ,genero:Tipo ,duracion:number ,año:number, calificacion:number, disponible:boolean){
        this.nombre=nombre;
        this.director = director ;
        this.genero = genero;
        this.duracion  = duracion;
        this.año = año;
        this.calificacion = calificacion;
        this.disponible = disponible;
        this.peliculas = [];
    }

    getNombre (){
        return this.nombre
    }
    getDirector (){
        return this.director
    }
    getGenero (){
        return this.genero
    }
    getDuracion (){
        return this.duracion
    }
    getAño (){
        return this.año
    }
    getCalificacion(){
        return this.calificacion
    }
    setNombre (nombre:string){
        this.nombre = nombre
    }
    setDirector (director:string){
        this.director = director
    }
    setGenero (genero:Tipo){
        this.genero = genero
    }
    setDuracion (duracion:number){
        this.duracion = duracion
    }
    setAño (año:number){
        this.año = año
    }
    setCalificacion (calificacion:number){
        this.calificacion = calificacion
        console.log('---------------------')
    }

    private esPeliculaEpica(): boolean {
        return this.calificacion >= 5;
        console.log('---------------------')
    }

    public obtenerValoracion(): string {
        if (this.esPeliculaEpica()) {
            return "¡Esta película es épica!";
    console.log('---------------------')
        } else {
            return "Esta película no es épica.";
        }
    console.log('---------------------')
    }
    public alquilar(): void {
        if (this.disponible) {
            console.log(`La película '${this.nombre}' ha sido alquilada.`);
            this.disponible = false;
         console.log('---------------------')
        } else {
            console.log(`La película '${this.nombre}' no está disponible para alquilar.`);
        }
        console.log('---------------------')
    }

    public devolver(): void {
        if (!this.disponible) {
            console.log(`La película '${this.nombre}' ha sido devuelta.`);
            this.disponible = true;
            console.log('---------------------')
        } else {
            console.log(`La película '${this.nombre}' ya estaba disponible.`);
        }
        console.log('---------------------')
    }
    public agregarPelicula(pelicula: Pelicula): void {
        this.peliculas.push(pelicula);
        console.log('---------------------')
    }

    public mostrarCarteleraDisponible(): void {
        console.log("Películas disponibles:");
        for (let Pelicula of this.peliculas) {
            if (Pelicula.disponible) {
                console.log(Pelicula.nombre);
                console.log('---------------------')
            }
        }
    }
}
