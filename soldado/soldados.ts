
export class Soldado{
    private nombre: string
    private fechaingreso: string
    private genero: string

    constructor(nombre:string, fechaingreso:string, genero:string){
        this.nombre = nombre
        this.fechaingreso = fechaingreso
        this.genero = genero
    }

    //getter y setter

    public getnombre(){
        return this.nombre
    }
    public getfechaingreso(){
        return this.fechaingreso
    }
    public getgenero(){
        return this.genero
    }
    public setnombre(nombre:string){
        this.nombre = nombre
    }
    public setfechaingreso(fechaingreso:string){
        this.fechaingreso = fechaingreso
    }
    public setgenero(genero:string){
        this.genero = genero
    }
    public mostrarsoldados(){
        return "nombre: "+ this.nombre+
        "\nfecha: "+this.fechaingreso+
        "\ngenero: "+this.genero
    }
}