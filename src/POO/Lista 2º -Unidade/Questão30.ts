// 30. O Sistema de Bilhetagem de Transporte Intermunicipal
// O sistema de transportes da região precisa de um software para gerenciar a venda de passagens. Crie
// um modelo onde cada passagem possua o nome do passageiro, CPF e o valor base da corrida. Garanta
// que esses dados não sejam alterados diretamente de fora da classe. Existem duas modalidades: a
// Passagem Comum e a Passagem Estudantil (que aplica automaticamente 50% de desconto no valor
// base). O programa deve solicitar ao usuário, em um laço de repetição, os dados de várias passagens e
// o seu tipo. No final, o sistema exibe o relatório de todas as passagens vendidas e calcula o
// faturamento total do dia utilizando uma estrutura de redução ou soma acumulada.

export function questãoPOO30():void{
    class Passagem {
        private _nome: string
        private _cpf: number
        private _valorBase: number

        constructor(nome: string, cpf: number, valorBase: number) {
            this._nome = nome
            this._cpf = cpf
            this._valorBase = valorBase
        }

        get nome(): string {
            return this._nome
        }
        get cpf(): number {
            return this._cpf
        }
        get valorBase(): number {
            return this._valorBase
        }

        calcularValor(): number {
            return this.valorBase
        }

        exibir(): void {
            alert(`Nome: ${this.nome} | CPF: ${this.cpf} | Valor: R$${this.calcularValor()}`)
        }
    }
    class Estudantil extends Passagem {
        calcularValor(): number {
            let valorFinal: number = this.valorBase * 0.5
            return valorFinal
        }
    }

let passagens:Passagem[]=[]
let comum:Passagem
let estudantil:Estudantil

let op=0
while(op!=2){
    let tipo:number=Number(prompt("Informe o tipo da passagem: (1-Comum/2-Estudantil"))

    let nome=String(prompt("Informe o nome do passageiro: "))
    let cpf=Number(prompt("Informe o cpf (número sem sinais): "))
    let valorB=Number(prompt('Informe o valor base: '))

    if(tipo==1){
        comum = new Passagem(nome,cpf,valorB)
        passagens.push(comum)
    }
    else if(tipo==2){
        estudantil = new Estudantil(nome, cpf, valorB)
        passagens.push(estudantil)
    }
    else{
        alert("Opção Inválida1")
    }
    op=Number(prompt("Deseja cadastrar outra passagem? (1-sim / 2-não) "))
}
 let faturamentoTotal: number = 0

    for (let passagem of passagens) {
        passagem.exibir()
        faturamentoTotal += passagem.calcularValor()
    }

    alert(`O faturamento total do dia foi de: R$${faturamentoTotal}`)
}