// 43. Repetição Encapsulamento Arrays
// Avaliação de Desempenho de Atletas
// Um clube de corrida deseja registrar a performance de seus atletas em uma maratona. Crie a classe
// Atleta com os atributos privados nome, idade e tempoMinutos. Garanta o encapsulamento de todos
// os atributos. O sistema deve permitir que o treinador cadastre via prompt os dados de vários atletas
// em um laço de repetição até digitar SAIR. O programa armazena os objetos em um array e, ao final,
// faz uma busca na lista para identificar e exibir os dados do atleta que concluiu a prova no menor
// tempo (o campeão da prova).

export function questãoPOO43():void{

class Atleta {
    private _nome: string 
    private _idade: number
    private _tempoMinutos: number
    
    constructor(nome:string, idade:number, tempoMinutos:number){
        this._nome = nome
        this._idade = idade
        this._tempoMinutos = tempoMinutos
    }
    public get nome(): string {
        return this._nome
    }
    public set nome(value: string) {
        this._nome = value
    }
     public get idade(): number {
        return this._idade
    }
    public set idade(value: number) {
        this._idade = value
    }
    public get tempoMinutos(): number {
        return this._tempoMinutos
    }
    public set tempoMinutos(value: number) {
        this._tempoMinutos = value
    }
    exibirCampeao():void{
        alert(`Campeão da Prova | Nome: ${this.nome} | Idade: ${this.idade} anos | Tempo: ${this.tempoMinutos} minutos`)}
    
}
let listaAtletas: Atleta[] = []
let idade:number, tempoMinutos:number, nome:string
let atleta:Atleta

let op = 0
while (op != 2) {

    nome = String(prompt("Informe seu nome: "))
    idade = Number(prompt("Informe a idade: "))
    tempoMinutos = Number(prompt("Informe o tempo em minutos: "))

    atleta = new Atleta(nome, idade, tempoMinutos)
    listaAtletas.push(atleta)

    op = Number(prompt("Digite 1-continuar a cadastrar atletas e 2-sair"))
}

let campeao = listaAtletas[0]

for (let i = 1; i < listaAtletas.length; i++) {
    if (listaAtletas[i].tempoMinutos < campeao.tempoMinutos) {
    campeao = listaAtletas[i]
    }
    campeao.exibirCampeao()
}
}
