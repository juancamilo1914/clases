export class detallesdelestadio{

    private id:number
    private capacidad:number
    //dimensiones
    private altura:number
    private largo:number
    private ancho:number

    constructor(id:number, capacidad:number, altura:number, largo:number, ancho:number){
        
        this.id = id
        this.capacidad = capacidad
        this.altura = altura
        this.largo = largo
        this.ancho = ancho

    }
//geters
    public getid() : number {
        return  this.id
    }
    public getcapacidad() : number {
        return  this.capacidad
    }
    public getaltura() : number {
        return  this.altura
    }
    public getlargo() : number {
        return  this.largo
    }
    public getancho() : number {
        return  this.ancho
    }
//setters
    public setid(id:number){
        this.id=id
    }
    public setcapacidad(capacidad:number){
        this.capacidad=capacidad
    }
    public setaltura(altura:number){
        this.altura=altura
    }
    public setlargo(largo:number){
        this.largo=largo
    }
    public setancho(ancho:number){
        this.ancho=ancho
    }
}