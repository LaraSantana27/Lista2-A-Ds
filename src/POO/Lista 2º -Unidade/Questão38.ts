// 38. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays Plataforma de Vendas e Cashback
// Uma loja virtual quer implementar um programa de fidelidade. A classe base Cliente possui nome e
// e-mail privados. A classe ClientePadrao acumula 1% do valor das compras como saldo de
// cashback. A classe ClienteVIP acumula 5% de cashback e possui frete grátis garantido. Ambas as
// classes possuem o método processarCompra(valor: number). ,
// O sistema deve interagir com o atendente para registrar as compras do dia, solicitando o tipo de cliente
//  e o valor gasto. Tudo deve ser armazenado em uma lista de clientes. Ao encerrar o programa, a lista 
// é percorrida para exibir o saldo final de cashback acumulado por cada cliente e o valor total de 
// cashback concedido pela loja.

export function questãoPOO38(): void {
    
class Cliente {
    private _nome: string
    private _email: string

    constructor(nome: string, email: string) {
        this._nome = nome
        this._email = email
    }

     public get nome(): string {
        return this._nome
    }
    public set nome(value: string) {
        this._nome = value
    }
    public get email(): string {
        return this._email
    }
    public set email(value: string) {
        this._email = value
    }
    processarCompra(valor: number): void {
    }
}

class ClientePadrao extends Cliente {
    private _cashback: number = 0

    public get cashback(): number {
        return this._cashback
    }
    public set cashback(value: number) {
        this._cashback = value
    }
    processarCompra(valor: number): void {
        this._cashback += valor * 0.01
    }
}

class ClienteVIP extends Cliente {
    private _cashback: number = 0

    public get cashback(): number {
        return this._cashback
    }
    public set cashback(value: number) {
        this._cashback = value
    }
    processarCompra(valor: number): void {
        this._cashback += valor * 0.05
    }
    public freteGratis(): boolean {
        return true
    }
}

let listaClientes: Cliente[] = []
let nome: string, email: string, valor: number
let cliente: Cliente
let opcao = 0

while (opcao != 3) {
    opcao = Number(prompt('Informe 1 - Cliente Padrão | 2 - Cliente VIP | 3 - Sair'))

    if (opcao == 1) {
        nome = String(prompt("Informe o nome do cliente: "))
        email = String(prompt("Informe o e-mail do cliente: "))
        valor = Number(prompt("Informe o valor da compra: "))

        cliente = new ClientePadrao(nome, email)
        cliente.processarCompra(valor)
        listaClientes.push(cliente)
        }

    if (opcao == 2) {
        nome = String(prompt("Informe o nome do cliente: "))
        email = String(prompt("Informe o e-mail do cliente: "))
        valor = Number(prompt("Informe o valor da compra: "))

        cliente = new ClienteVIP(nome, email)
        cliente.processarCompra(valor)
        listaClientes.push(cliente)
    }
}
let totalCashback = 0

for (let i = 0; i < listaClientes.length; i++) {
    let clienteAtual = listaClientes[i]
    let cashbackAtual = 0

    if (clienteAtual instanceof ClientePadrao) {
        cashbackAtual = clienteAtual.cashback
    }
    if (clienteAtual instanceof ClienteVIP) {
        cashbackAtual = clienteAtual.cashback
    }
    totalCashback += cashbackAtual

    alert(`CLIENTE
        ==================
        Nome: ${clienteAtual.nome}
        E-mail: ${clienteAtual.email}
        Cashback: R$ ${cashbackAtual}`)
        }

    alert(`TOTAL DE CASHBACK: 
        ======================
        R$ ${totalCashback}`)
            
    }

