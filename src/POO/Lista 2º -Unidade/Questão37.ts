// 37. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Sistema de Consumo de Energia Elétrica
// Uma concessionária de energia precisa calcular a conta de luz dos consumidores. A superclasse
// Consumidor possui o número da conta e a quantidade de kWh consumidos no mês privados. A
// subclasse ConsumidorResidencial cobra R$ 0,75 por kWh. A subclasse ConsumidorComercial
// cobra R$ 0,60 por kWh para consumos de até 1000 kWh e R$ 0,50 por kWh para o que exceder esse
// limite. O sistema deve interagir com o usuário solicitando os dados de vários consumidores em um
// laço. Após o preenchimento da lista, o programa exibe o detalhamento de cada fatura chamando o
// método de cálculo de valor polimorficamente e mostra a média de consumo em kWh de todos os
// cadastrados.

export function questãoPOO37():void{

abstract class Consumidor {
    private _numeroConta: number
    private _quantidadeKWh: number

    constructor(numeroConta: number, quantidadeKWh: number) {
        this._numeroConta = numeroConta
        this._quantidadeKWh = quantidadeKWh
    }
    public get quantidadeKWh(): number {
        return this._quantidadeKWh
    }
    public get numeroConta(): number {
        return this._numeroConta
    }
    abstract calcularValor(): number
}

class ConsumidorResidencial extends Consumidor {
    calcularValor(): number {
        return this.quantidadeKWh * 0.75
    }
}

class ConsumidorComercial extends Consumidor {
    calcularValor(): number {
        if (this.quantidadeKWh <= 1000) {
            return this.quantidadeKWh * 0.60
        }
        else {
            let valorPrimeiros1000 = 1000 * 0.60
            let valorExcedente = (this.quantidadeKWh - 1000) * 0.50

            return valorPrimeiros1000 + valorExcedente
        }
    }
}

let consumidores: Consumidor[] = []
let consumidor: Consumidor
let op = 0

while (op !== 2) {
    let tipo = Number(prompt("Informe o tipo de consumidor: (1-Residencial / 2-Comercial)"))
    let numeroConta = Number(prompt("Informe o número da conta:"))
    let quantidadeKWh = Number(prompt("Informe a quantidade de kWh consumidos:"))

    if (tipo === 1) {
        consumidor = new ConsumidorResidencial(numeroConta,quantidadeKWh)
        consumidores.push(consumidor)
    }
    else if (tipo === 2) {
        consumidor = new ConsumidorComercial(numeroConta,quantidadeKWh)
        consumidores.push(consumidor)
    }
    else {
        alert("Opção inválida!")
    }

    op = Number(prompt("Deseja cadastrar outro consumidor? (1-Sim / 2-Não)"))
}

let totalConsumo = 0

for (let consumidor of consumidores) {
    let valor = consumidor.calcularValor()
    totalConsumo += consumidor.quantidadeKWh

    alert(
        `Conta: ${consumidor.numeroConta}
        Consumo: ${consumidor.quantidadeKWh} kWh
        Valor da fatura: R$ ${valor.toFixed(2)}`)
}
let mediaConsumo = totalConsumo / consumidores.length

alert(
    `Média de consumo: ${mediaConsumo.toFixed(2)} kWh`
)
}