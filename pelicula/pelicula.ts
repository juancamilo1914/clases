import { Tipo } from "./genero"

export class Pelicula {
 
    private nombre:string
    private director:string
    private genero:Tipo
    private duracion:number
    private año:number
    private calificacion:number
    
    constructor(nombre:string ,director:string ,genero:Tipo ,duracion:number ,año:number, calificacion:number){
        this.nombre=nombre;
        this.director = director ;
        this.genero = genero;
        this.duracion  = duracion;
        this.año = año;
        this.calificacion = calificacion;
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
    }

    private esPeliculaEpica(): boolean {
        return this.duracion >= 3;
    }

    public obtenerValoracion(): string {
        if (this.esPeliculaEpica()) {
            return "¡Esta película es épica!";
        } else {
            return "Esta película no es épica.";
        }
} 
}