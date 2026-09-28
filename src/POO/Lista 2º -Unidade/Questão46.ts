// 46. Repetição Encapsulamento
// Calculadora de Rendas de Aluguel Imobiliário
// Uma imobiliária quer controlar o recebimento de aluguéis.
// A classe Imovel possui codigo, valorAluguel e diasAtraso.
// O método calcularValorComMulta() aplica 2% sobre o valor
// do aluguel mais R$ 5,00 por dia de atraso.

export function questãoPOO46(): void {

class Imovel {
    private _codigo: number
    private _valorAluguel: number
    private _diasAtraso: number

    constructor(codigo: number, valorAluguel: number, diasAtraso: number) {
        this._codigo = codigo
        this._valorAluguel = valorAluguel
        this._diasAtraso = diasAtraso
    }
    public get codigo(): number {
        return this._codigo
    }
    public set codigo(value: number) {
        this._codigo = value
    }
    public get valorAluguel(): number {
        return this._valorAluguel
    }
    public set valorAluguel(value: number) {
        this._valorAluguel = value
    }
    public get diasAtraso(): number {
        return this._diasAtraso
    }
    public set diasAtraso(value: number) {
        this._diasAtraso = value
    }
    public calcularValorComMulta(): number {
        if (this._diasAtraso > 0) {
            let multa = (this._valorAluguel * 0.02) + (this._diasAtraso * 5)
            return this._valorAluguel + multa

            }
            else {
                return this._valorAluguel
            }
        }
    }
let codigo = 0
while (codigo != 0) {
    codigo = Number(prompt("Informe o código do imóvel (0 para sair):"))

    if (codigo != 0) {
        let valorAluguel = Number(prompt("Informe o valor do aluguel:"))
        let diasAtraso = Number(prompt("Informe a quantidade de dias de atraso:"))

        let imovel = new Imovel(codigo,valorAluguel,diasAtraso)

        let valorAtualizado = imovel.calcularValorComMulta()
        alert(`==== IMÓVEL:
            Código: ${imovel.codigo} 
            Valor do aluguel: R$ ${imovel.valorAluguel} 
            Dias de atraso: ${imovel.diasAtraso} 
            Valor atualizado: R$ ${valorAtualizado} `) 
    } 
} 

}
