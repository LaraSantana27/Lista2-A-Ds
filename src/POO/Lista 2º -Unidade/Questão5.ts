// 5. Classe Pessoa: Crie uma classe que modele uma pessoa:
// 1. Atributos: nome, idade, peso e altura
// 2. Métodos: Envelhecer, engordar, emagrecer, crescer.
// Obs: Por padrão, a cada ano que nossa pessoa envelhece, sendo a idade dela menor que 21 anos,
// ela deve crescer 0,5 cm.

export function questãoPOO5():void{
class Pessoa{
    nome:string
    idade:number
    peso:number
    altura:number

    constructor(n:string, i:number, p:number, a:number){
        this.nome=n
        this.idade=i
        this.peso=p
        this.altura=a
    }
    crescer(): number{
        diferenca = crescimento-idade
        if(this.idade<21){
            this.altura += diferenca*0.5
        }
        return this.altura   
    }
    
}
let altura=Number(prompt("Informe sua altura: "))
let idade=Number(prompt("Informe sua idade: "))
let crescimento=21
let diferenca, alturaFinal
}

// Incompleta