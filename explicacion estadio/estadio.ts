import { detallesdelestadio } from "./Detalllesdelestadio"

export class estadio {
    private id:number
    private nombre:string
    private direccion:string
    private detallesdelesatdio: detallesdelestadio

    //constructor

    constructor(id:number, nombre:string, direccion:string, detallesdelesatdio:detallesdelestadio){
        this.id = id
        this.nombre = nombre
        this.direccion = direccion
        this.detallesdelesatdio
    }

    //getters

    public getnombre() : string {
        return this.nombre;
    }
    public getdireccion(): string{
        return  this.direccion ;
    }
    public getid(): number{
        return   this.id
    }
    public getdetallesdelestadio(){
        return this.detallesdelesatdio
    }


    //setters

    public setnombre(nombre:string){
        this.nombre = nombre
    }
    public setdireccion(direccion:string){
        this.direccion = direccion
    }
    public setid(id:number){
        this.id = id
    }
    public setdetallesdelestadio(detallesdelesatdio:detallesdelestadio){
        this.detallesdelesatdio
    }
    
}