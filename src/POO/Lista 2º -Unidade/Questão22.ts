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
    private _placa: string
    private _QAtual: number

    constructor(placa: string, QAtual: number) {
        this._placa = placa
        this._QAtual = QAtual
    }

    public get placa(): string {
        return this._placa
    }

    public set placa(value: string) {
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

let quantidade: number = Number(prompt("Quantos veículos serão cadastrados?"))

for (let i = 0; i < quantidade; i++) {

    let tipo: string = prompt(
        "Digite o tipo do veículo (1 - Ônibus / 2 - Ambulância):"
    )!

    let placa: string = prompt("Digite a placa:")!
    let quilometragem: number = Number(
        prompt("Digite a quilometragem atual:")
    )

    if (tipo === "1") {
        frota.push(new Onibus(placa, quilometragem))
    } 
    else if (tipo === "2") {
        frota.push(new Ambulancia(placa, quilometragem))
    }
}

let placaBusca: string = prompt(
    "Digite a placa do veículo que deseja consultar:"
)!

let quilometragemAtual: number = Number(
    prompt("Informe a quilometragem atual do veículo:")
)

let encontrado: boolean = false

for (let veiculo of frota) {

    if (veiculo.placa === placaBusca){
        encontrado = true
        veiculo.QAtual = quilometragemAtual
        if (veiculo.revisao()) {
            console.log(
                `O veículo ${veiculo.placa} precisa ser retido para manutenção imediata.`
            )
        } 
        else {
            console.log(
                `O veículo ${veiculo.placa} não precisa de manutenção imediata.`
            )
    }

if (!encontrado) {
    console.log("Veículo não encontrado na frota.")
} 
}
