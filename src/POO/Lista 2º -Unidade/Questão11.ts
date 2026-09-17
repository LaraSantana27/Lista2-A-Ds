// 11. Repetição Encapsulamento
// Uma lanchonete quer registrar pedidos dos clientes. O sistema deve solicitar o nome do cliente, o
// nome do pedido e o valor. Crie um método que exiba o resumo do pedido e o valor total.

export function questãoPOO11():void{

class Pedidos{
    private _nomeCliente: string
    private _nomePedido: string
    private _valor: number

    constructor(nomeCliente:string, nomePedido:string, valor:number){
        this._nomeCliente=nomeCliente
        this._nomePedido=nomePedido
        this._valor=valor
    }
    public get nomeCliente(): string {
        return this._nomeCliente
    }
    public set nomeCliente(value: string) {
        this._nomeCliente = value
    }
    public get nomePedido(): string {
        return this._nomePedido
    }
    public set nomePedido(value: string) {
        this._nomePedido = value
    }
    public get valor(): number {
        return this._valor
    }
    public set valor(value: number) {
        this._valor = value
    }
    exibirResumo():void{
        alert(`PEDIDO:
    Nome do Cliente: ${this._nomeCliente} 
    Nome Pedido: ${this._nomePedido}
    Valor: ${this._valor} `
)
    }
}
let op=Number(prompt("Digite (1)-Fazer Pedido | (2)-Encerrar"))

while(op!==2){
        let nomeCliente=String(prompt("Informe o nome de cliente: "))
        let nomePedido=String(prompt("Informe o seu pedido: "))
        let valor=Number(prompt("Informe o valor: "))

        const novoPedido:Pedidos = new Pedidos (nomeCliente, nomePedido, valor)
        novoPedido.exibirResumo()

        op=Number(prompt("Digite (1)-Fazer Pedido | (2)-Encerrar"))
    }

}
