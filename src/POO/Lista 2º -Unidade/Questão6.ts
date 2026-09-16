// 6. Classe Conta Corrente: Crie uma classe para implementar uma conta corrente. A classe deve possuir
// os seguintes atributos: número da conta, nome do correntista e saldo. Os métodos são os seguintes:
// alterarNome, depósito e saque. No construtor, saldo é opcional, com valor default zero e os demais
// atributos são obrigatórios. Por fim, faça com que esse sistema interaja com o usuário permitido que
// ele, depois de cadastrar as suas informações, possa usar os métodos disponíveis.

export function questãoPOO6(): void {
    class ContaCorrente {
        numeroConta: number
        nomeCorrentista: string
        saldo: number

        constructor(n: number, nome: string, saldo: number = 0) {
            this.numeroConta = n
            this.nomeCorrentista = nome
            this.saldo = saldo
        }

        alterarNome(novoNome: string) {
            this.nomeCorrentista = novoNome
        }

        deposito(valor: number) {
            this.saldo += valor
        }

        saque(valor: number) {
            this.saldo -= valor
        }
    }

    let numeroConta = Number(prompt("Informe o número da conta: "))
    let nome = String(prompt("Informe o nome do correntista: "))
    let saldo = Number(prompt("Informe o saldo inicial (opcional): "))

    let conta = new ContaCorrente(numeroConta, nome, saldo)

    let novoNome = String(prompt("Informe o novo nome: "))
    conta.alterarNome(novoNome)

    let deposito = Number(prompt("Informe o valor do depósito: "))
    conta.deposito(deposito)

    let saque = Number(prompt("Informe o valor do saque: "))
    conta.saque(saque)

    alert(`INFORMAÇÕES:
    Número da conta: ${conta.numeroConta}
    Nome: ${conta.nomeCorrentista}
    Saldo: R$ ${conta.saldo}`)
}