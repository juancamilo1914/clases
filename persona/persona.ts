export class Persona {
    private nombre:string
    private edad:number
    private telefono:number
    private direccion:string
    private ciudad:string

    constructor(name:string, age:number, tel:number, dir:string, city:string){
        this.nombre = name
        this.edad = age
        this.telefono = tel
        this.direccion = dir
        this.ciudad = city
    }

    public getnombre(){
        return this.nombre
    }
    public getedad(){
        return this.edad
    }
    public gettelefono(){
        return this.telefono
    }
    public getdireccion(){
        return this.direccion
    }
    public getciudad(){
        return this.ciudad
    }
    public setnombre(nombre:string){
        this.nombre = nombre
    }
    public setedad(edad:number){
        this.edad = edad
    }
    public settelefono(telefono:number){
        this.telefono = telefono
    }
    public setdireccion(direccion:string){
        this.direccion = direccion
    }
    public setciudad(ciudad:string){
        this.ciudad = ciudad
    }

    public mostrarDatos(){
        console.log("nombre: "+ this.nombre)
        console.log("edad:"+ this.edad)
        console.log("telefono"+ this.telefono)
        console.log("direccion"+ this.direccion)
        console.log("ciudad"+ this.ciudad)
    }
}