// 20. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Gestão de Pedidos de uma Pizzaria Local
// Para modernizar o atendimento de uma pizzaria, crie um sistema de pedidos. Um pedido base tem o
// número da mesa e o valor dos ingredientes. O Pedido de Entrega (Delivery) herda as propriedades do
// pedido base, mas precisa incluir uma taxa de entrega protegida e o endereço de destino. O software
// deve interagir com o atendente perguntando os detalhes de cada pedido feito na noite. Conforme os
// pedidos são criados, eles entram em um array de controle. Ao fechar o caixa, o sistema percorre a
// lista de pedidos, calcula os valores finais de cada um (aplicando as taxas quando necessário) e exibe
// o faturamento total do estabelecimento.

export function questãoPOO20():void{

class Pedido{
    private _mesa: number
    private _valorIngredientes: number

    constructor(mesa:number, valorIngredientes:number){
        this._mesa=mesa
        this._valorIngredientes=valorIngredientes
    }
    public get mesa(): number {
        return this._mesa
    }
    public set mesa(value: number) {
        this._mesa = value
    }
    public get valorIngredientes(): number {
        return this._valorIngredientes
    }
    public set valorIngredientes(value: number) {
        this._valorIngredientes = value
    }

    calcularValorFinal(): number {
        return this.valorIngredientes
    }
}

class Delivery extends Pedido{
    protected _taxaEntrega: number
    private _endereco: string

    constructor(mesa:number, valorIngredientes:number, taxaEntrega:number, endereco:string){
        super(mesa, valorIngredientes)
        this._taxaEntrega=taxaEntrega
        this._endereco=endereco
    }
    public get taxaEntrega(): number {
        return this._taxaEntrega
    }
    public set taxaEntrega(value: number) {
        this._taxaEntrega = value
    }
    public get endereco(): string {
        return this._endereco
    }
    public set endereco(value: string) {
        this._endereco = value
    }

    calcularValorFinal(): number {
        return this.valorIngredientes + this.taxaEntrega
    }
}

let pedidos: Pedido[] = []
let continuar=Number(prompt("Informe 1-cadastrar pedido | 2-parar"))
let pedido:Pedido
let delivery:Delivery

while (continuar !==2 ){
    let tipo = Number(prompt("Tipo de pedido: 1-Mesa | 2-Delivery"))
    let mesa = Number(prompt("Informe o número da mesa (ou 0 para delivery):"))
    let valorIngredientes = Number(prompt("Informe o valor dos ingredientes:"))

    if (tipo == 1) {
        pedido = new Pedido(mesa, valorIngredientes)
        pedidos.push(pedido)
    } 
    else if (tipo == 2) {
        let taxaEntrega = Number(prompt("Informe a taxa de entrega:"))
        let endereco = String(prompt("Informe o endereço de destino:"))

        delivery = new Delivery(mesa, valorIngredientes, taxaEntrega, endereco)
        pedidos.push(delivery)
    }
    else {
        alert("Tipo inválido!")
    }
    continuar = Number(prompt("Deseja registrar outro pedido? (1-sim/2-não)"))
}

let faturamentoTotal = 0
for (let i = 0; i < pedidos.length; i++) {
    faturamentoTotal += pedidos[i].calcularValorFinal()
}
alert(`Faturamento total da noite: R$ ${faturamentoTotal}`)
}
