import { Soldado } from "./soldados";

export class comandate{
    private nombre: string
    private rango: string
    private genero: string
    private Listadesoldados: Array<Soldado>

    constructor(nombre:string, rango:string, genero:string){
        this.nombre = nombre
        this.rango = rango
        this.genero = genero
        this.Listadesoldados =[]
    }

    //getter y setter

    public getnombre(){
        return this.nombre
    }  
    public getrango(){
        return this.rango
    }
    public getgenero(){
        return this.genero
    }
    public setnombre(nombre:string){
        this.nombre = nombre;
    }
    public setrango(rango:string){
        this.rango = rango;
    }
    public setgenero(genero:string){
        this.genero = genero;
    }

    //metodo

    ingresarsoldado(Soldado: Soldado){
        this.Listadesoldados.push(Soldado)
    }
    public numerodesoldados(){
        return this.Listadesoldados.length
        //console.log("el comandante"+ this.nombre+
        //" tiene: "+this.listadesoldados.length)
    }

    public mostrardatoscomandante(){
        return this.nombre +"\n"
        + this.rango +"\n"
        + this.genero
    }
    public mostrardatossoldados(){

            console.log("el comandante "+ this.nombre+ "tiene los siguentes soldados a su cargo:" )

        for (let i = 0; i < this.Listadesoldados.length; i++) {
            console.log(this.Listadesoldados[i].mostrarsoldados())
            console.log("-----------");

        }
    }
        
}