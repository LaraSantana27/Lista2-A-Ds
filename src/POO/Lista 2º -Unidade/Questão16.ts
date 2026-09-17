// 16. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Um zoológico possui mamíferos e aves. Ambos têm nome, espécie, idade e sexo, todos privados.
// Mamíferos têm tipo de alimentação; aves têm se são migratórias ou não. Cada animal tem um
// comportamento de ‘emitir som’ e ‘mover’ diferente. O sistema deve cadastrar animais, listar por tipo
// (Mamíferos ou Aves) e simular a "hora da alimentação" chamando o método de som de cada um.

abstract class Animal{
    private _nome: string 
    private _especie: string  
    private _idade: number  
    private _sexo: string
    
    constructor(nome:string, especie:string, idade:number, sexo:string){
            this._nome = nome
            this._especie = especie
            this._idade = idade
            this._sexo = sexo
    }
    public get nome(): string {
        return this._nome
    }
    public set nome(value: string) {
        this._nome = value
    }
    public get especie(): string {
        return this._especie
    }
    public set especie(value: string) {
        this._especie = value
    }
    public get idade(): number {
        return this._idade
    }
    public set idade(value: number) {
        this._idade = value
    }
    public get sexo(): string {
        return this._sexo
    }
    public set sexo(value: string) {
        this._sexo = value
    }

    emitirSom(): void{   
    }
    
    mover(): void{
    }

}

class Aves extends Animal{
    private _migração: boolean
    constructor(migração:boolean, nome:string, especie:string, idade:number, sexo:string){
        super(nome, especie, idade, sexo)
        this._migração=migração
    }
     public get migração(): boolean {
        return this._migração
    }
    public set migração(value: boolean) {
        this._migração = value
    }
    public emitirSom(): void {
        console.log(`A ave ${this.nome} faz Pô Pô Pô Pô`)
    }
    public mover(): void {
        console.log(`A ave ${this.nome} voa`)
    }
   
}

class Mamíferos extends Animal{
    private _tipoAlimentacao: number
    constructor(tipoAlimentacao:number, nome:string, especie:string, idade:number, sexo:string){
        super(nome,especie,idade,sexo)
        this._tipoAlimentacao=tipoAlimentacao
    }
     public get tipoAlimentacao(): number {
        return this._tipoAlimentacao
    }
    public set tipoAlimentacao(value: number) {
        this._tipoAlimentacao = value
    }
    public emitirSom(): void {
        console.log(`O mamífero ${this.nome} late`)
    }
    public mover(): void {
        console.log(`O mamífero ${this.nome} corre`)
    }

}
let animais: Animal[]=[]

let nome=""
let especie=""
let idade=0
let sexo=""
let migracao=""
let alimentacao=0

let op=Number(prompt("Informe se o animal é 1-Ave ou 2-Mamífero: "))
if(op==1){
    nome=String(prompt("Informe o nome da ave: "))
    especie=String(prompt("Informe a especie da ave: "))
    idade=Number(prompt("Informe a idade da ave: "))
    sexo=String(prompt("Informe o sexo da ave F/M : ")).toUpperCase()
    migracao=String(prompt("A ave é migratoria? S-sim/N-não")).toUpperCase()

   let ave = new Aves(
        migracao == "S",
        nome,
        especie,
        idade,
        sexo
    )
    animais.push(ave)

}
else if(op==2){
    nome=String(prompt("Informe o nome do mamífero: "))
    especie=String(prompt("Informe a especie do mamífero: "))
    idade=Number(prompt("Informe a idade do mamífero: "))
    sexo=String(prompt("Informe o sexo do mamífero F/M : ")).toUpperCase()
    alimentacao=Number(prompt("Informe o tipo de alimentação: 1-Carne | 2-folhas"))

    let mamifero = new Mamíferos(
    alimentacao,
    nome,
    especie,
    idade,
    sexo
)

animais.push(mamifero)

}
else{
    alert("Opção Invalida!")
}
