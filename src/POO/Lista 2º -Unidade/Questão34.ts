// 34. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Sistema de Gestão de Estacionamento Rotativo
// Para organizar o fluxo de veículos em um estacionamento no centro da cidade, crie um software de
// bilhetagem. A superclasse abstrata Veiculo possui placa e hora de entrada (atributos privados) e o
// método abstrato calcularValor(horasPermanencia: number): number. A classe Carro cobra R$
// 5,00 por hora. A classe Moto cobra R$ 3,00 por hora. O programa deve rodar dentro de um laço de
// repetição permitindo cadastrar os veículos que estão saindo e a quantidade de horas que
// permaneceram. Os objetos devem ser armazenados em um array de veículos. Ao encerrar o
// expediente, o sistema percorre o array, chama o método de cálculo de forma polimórfica para cada
// item e exibe o faturamento total arrecadado no dia.

export function questãoPOO34():void{

abstract class Veiculo{
    private _placa: number
    private _horaEntrada: number

    constructor(placa:number, horaEntrada:number){
        this._placa=placa
        this._horaEntrada=horaEntrada
    }
    
    public get horaEntrada(): number {
        return this._horaEntrada
    }
    public set horaEntrada(value: number) {
        this._horaEntrada = value
    }
    public get placa(): number {
        return this._placa
    }
    public set placa(value: number) {
        this._placa = value
    }

    abstract calcularValor(horasPermanencia: number): number

    exibirResumo(horasPermanencia:number): void {
            alert(`Placa: ${this.placa} | Horario entrada: ${this.horaEntrada} | Valor: R$${this.calcularValor(horasPermanencia)}`)
        }
}

class Carro extends Veiculo {
    calcularValor(horasPermanencia: number): number {
        let valorTotal: number = horasPermanencia * 5
        return valorTotal
    }
}

class Moto extends Veiculo {
    calcularValor(horasPermanencia: number): number {
        let valorTotal: number = horasPermanencia * 3
        return valorTotal
    }
}

let veiculos: Veiculo[] = []
let horasPermanencia: number[] = []
let op: number = 0
let carros:Carro
let motos:Moto

while(op!=2){
    let tipo:number=Number(prompt("Informe o tipo de veículo: (1-Comum/2-Estudantil"))

    let placa=Number(prompt("Informe a placa do veículo: "))
    let horaEntrada=Number(prompt("Informe o horário de entrada "))

    if(tipo==1){
        carros = new Carro(placa, horaEntrada)
        veiculos.push(carros)
    }
    else if(tipo==2){
        motos = new Moto(placa, horaEntrada)
        veiculos.push(motos)
    }
    else{
        alert("Opção Inválida1")
    }
    op=Number(prompt("Deseja cadastrar outro veiculo? (1-sim / 2-não) "))
}
let faturamentoTotal:number = 0

for (let i = 0; i < veiculos.length; i++) {
    veiculos[i].exibirResumo(horasPermanencia[i])

    faturamentoTotal += veiculos[i].calcularValor(horasPermanencia[i])
}
alert(`O faturamento total do dia foi de: R$ ${faturamentoTotal}`)
}