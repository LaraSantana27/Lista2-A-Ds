// 39. Abstração Herança Polimorfismo Repetição Encapsulamento
// Processador de Pedidos de Restaurante (Drive-Thru)
// Para agilizar o atendimento de um Drive-Thru, crie um modelo de pedidos. A classe abstrata Pedido
// possui o número do pedido e o valor base dos itens privados, além do método abstrato
// calcularTotal():number. O PedidoLocal adiciona uma taxa de serviço de 10%. O
// PedidoDriveThru adiciona uma taxa fixa de embalagem especial de R$ 3,00. O sistema interativo
// deve perguntar repetidamente ao caixa os dados dos pedidos atendidos. A cada pedido inserido, o
// programa invoca o cálculo total e acumula o valor em uma variável de faturamento bruto, exibindo na
// tela o resumo do pedido recém-calculado até que o usuário opte por fechar o caixa.

export function questãoPOO39():void{

abstract class Pedido{
    private _numeroPedido: number
    private _valorBase: number

    constructor(numeroPedido:number, valorBase:number){
        this._numeroPedido=numeroPedido
        this._valorBase=valorBase
    }
    public get numeroPedido(): number {
        return this._numeroPedido
    }
    public get valorBase(): number {
        return this._valorBase
    }
    abstract calcularTotal():number
}

class PedidoLocal extends Pedido {
    calcularTotal(): number {
        return this.valorBase + (this.valorBase * 0.10)
    }
}

class PedidoDriveThru extends Pedido {
    calcularTotal(): number {
        return this.valorBase + 3
    }
}

let pedidos: Pedido[] = []
let pedido: Pedido
let op = 0
let faturamentoBruto = 0

while (op !== 2) {
    let tipo = Number(prompt("Informe o tipo de pedido: (1-Local / 2-Drive-Thru)"))
    let numeroPedido = Number(prompt("Informe o número do pedido:"))
    let valorBase = Number(prompt("Informe o valor base dos itens:"))

    if (tipo == 1) {
        pedido = new PedidoLocal(numeroPedido, valorBase)
        pedidos.push(pedido)

        let valorTotal = pedido.calcularTotal()
        faturamentoBruto += valorTotal

        alert(
            `Número do pedido: ${pedido.numeroPedido}
            Valor base: R$ ${pedido.valorBase}
            Valor total: R$ ${valorTotal}`
        )
    }
    else if (tipo == 2) {
        pedido = new PedidoDriveThru(numeroPedido, valorBase)
        pedidos.push(pedido)

        let valorTotal = pedido.calcularTotal()
        faturamentoBruto += valorTotal

        alert(
            `Número do pedido: ${pedido.numeroPedido}
            Valor base: R$ ${pedido.valorBase}
            Valor total: R$ ${valorTotal}`
        )
    }
    else {
        alert("Opção inválida!")
    }

    op = Number(prompt("Deseja cadastrar outro pedido? (1-Sim / 2-Não)"))
}
}
