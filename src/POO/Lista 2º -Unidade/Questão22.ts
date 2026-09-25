// 22. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Oficina Mecânica e Revisão de Frotas
// O setor de transportes públicos precisa mapear a manutenção de seus veículos. Crie uma classe base
// para Veículo com placa e quilometragem atual. Os Ônibus precisam fazer revisão a cada 10.000 km,
// enquanto as Ambulâncias precisam de revisão preventiva a cada 5.000 km. O sistema interativo deve
// perguntar as informações da frota atual e guardar os objetos em um array. Depois, o programa solicita
// que o mecânico informe a quilometragem atual de um determinado veículo e, varrendo o array de
// objetos, o sistema responde textualmente se aquele veículo específico precisa ou não ser retido para
// manutenção imediata.

abstract class Veiculo {
    private _placa: number
    private _QAtual: number

    constructor(placa: number, QAtual: number) {
        this._placa = placa
        this._QAtual = QAtual
    }
    public get placa(): number {
        return this._placa
    }
    public set placa(value: number) {
        this._placa = value
    }
    public get QAtual(): number {
        return this._QAtual
    }
    public set QAtual(value: number) {
        this._QAtual = value
    }

    abstract revisao(): boolean
}

class Onibus extends Veiculo {
    revisao(): boolean {
        return this.QAtual % 10000 === 0
    }
}
class Ambulancia extends Veiculo {
    revisao(): boolean {
        return this.QAtual % 5000 === 0
    }
}

let frota: Veiculo[] = []
let onibus:Onibus
let ambulancia:Ambulancia
let quantidade: number = Number(prompt("Quantos veículos serão cadastrados?"))

for (let i = 0; i < quantidade; i++) {
    let tipo=Number(prompt("Digite o tipo do veículo (1 - Ônibus / 2 - Ambulância)"))
    let placa=Number(prompt("Digite a placa:"))
    let quilometragem=Number(prompt("Digite a quilometragem atual:"))

    if (tipo == 1) {
        onibus=new Onibus(placa , quilometragem)
        frota.push(onibus)
    } 
    else if (tipo == 2) {
        ambulancia=new Ambulancia(placa, quilometragem)
        frota.push(ambulancia)
    }
}

let placaBusca=Number(prompt("Digite a placa do veículo que deseja consultar:"))
let quilometragemAtual=Number(prompt("Informe a quilometragem atual do veículo:"))
let encontrado = false

for (let i = 0; i < frota.length; i++) {
    if (frota[i].placa == placaBusca) {
        frota[i].QAtual = quilometragemAtual

        if (frota[i].revisao()) {
            alert("O veículo precisa ser retido para manutenção imediata!")
        } 
        else {
            alert("O veículo não precisa de manutenção imediata.")
        }
        encontrado = true
    }
        if (encontrado == false) {
            alert("Veículo não encontrado!")
}
}