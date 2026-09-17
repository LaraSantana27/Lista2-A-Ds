// 12. Repetição Encapsulamento
// Uma locadora quer controlar os carros disponíveis. O sistema deve solicitar o modelo do carro, o
// valor da diária e a quantidade de dias que o cliente deseja alugar. Crie um método que calcule o valor
// total do aluguel e exiba o resumo da locação. Por fim, o sistema deve perguntar se deseja fazer uma
// nova locação.

class Carro{
    private _modelo: string
    private _valorDiaria: number
    private _qntDias: number

    constructor(modelo:string, valorDiaria:number, qntDias:number){
        this._modelo=modelo
        this._valorDiaria=valorDiaria
        this._qntDias=qntDias
    }
    public get modelo(): string {
        return this._modelo
    }
    public set modelo(value: string) {
        this._modelo = value
    }
    public get valorDiaria(): number {
        return this._valorDiaria
    }
    public set valorDiaria(value: number) {
        this._valorDiaria = value
    }
    public get qntDias(): number {
        return this._qntDias
    }
    public set qntDias(value: number) {
        this._qntDias = value
    }

    valorAluguel(){
        let aluguel=this._valorDiaria*this._qntDias

    }
    exibirResumo():void{

    }
}
let op=Number(prompt("Digite (1)-Fazer Locação | (2)-Encerrar"))

while(op!==2){
        let modelo=String(prompt("Informe o nome do modelo: "))
        let diaria=Number(prompt("Informe o valor da diária: "))
        let dias=Number(prompt("Informe a quantidade de dias: "))

        const novoCadastro:Carro = new Carro (modelo, diaria, dias)
        novoCadastro.exibirResumo()

        op=Number(prompt("Digite (1)-Fazer Locação | (2)-Encerrar"))
}