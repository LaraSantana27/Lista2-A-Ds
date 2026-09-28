// 47. Repetição Encapsulamento
// Sistema de Controle de Gastos Pessoais
// Para ajudar no planejamento financeiro, crie uma classe Despesa com os atributos privados
// descricao, categoria e valor. Crie métodos de leitura e escrita com validação para impedir valores
// menores ou iguais a zero no atributo valor. O programa deve solicitar repetidamente que o usuário
// insira suas despesas do mês. O sistema mantém uma variável acumuladora para somar o valor total
// das despesas inseridas e exibe o saldo devedor atualizado a cada nova entrada até que o usuário decida
// parar o preenchimento.

export function questãoPOO47(): void {

class Despesa {
    private _descricao: string
    private _categoria: string
    private _valor: number

    constructor(descricao: string, categoria: string, valor: number) {
        this._descricao = descricao
        this._categoria = categoria
        this.valor = valor
        this._valor = 0
    }

    get descricao(): string {
        return this._descricao
    }
    set descricao(descricao: string) {
        this._descricao = descricao
    }
    get categoria(): string {
        return this._categoria
    }
    set categoria(categoria: string) {
        this._categoria = categoria
    }
    get valor(): number {
        return this._valor
    }
    set valor(valor: number) {
        if (valor > 0) {
            this._valor = valor
        }
        else {
            alert(`O valor da despesa deve ser maior que zero!`)
        }

    }
}

let totalDespesas: number = 0
let op: number = 0

while (op != 2) {
    let descricao: string = String(prompt("Informe a descrição da despesa: "))
    let categoria: string = String(prompt("Informe a categoria: "))
    let valor: number = Number(prompt("Informe o valor: "))

    let despesa: Despesa = new Despesa(descricao, categoria, valor)

    if (despesa.valor > 0) {
        totalDespesas += despesa.valor
        alert(`Descrição: ${despesa.descricao}
            Categoria: ${despesa.categoria}
            Valor: R$${despesa.valor}
            Saldo devedor atualizado: R$${totalDespesas}`)
    }
    op = Number(prompt("Deseja cadastrar outra despesa? (1 - Sim / 2 - Não): "))
    }

alert(`Total das despesas do mês: R$${totalDespesas}`)
}