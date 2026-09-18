// 13. Repetição Encapsulamento
// Uma escola quer cadastrar alunos e suas notas. O sistema deve solicitar o nome do aluno e duas notas.
// Cada aluno será um objeto. Crie um método que calcule a média e informe se o aluno foi aprovado
// (média >= 7) ou reprovado (caso contrário).

export function questãoPOO13():void{

class Escola{
    private _nome: string  
    private _nota1: number
    private _nota2: number

    constructor(nome:string, nota1:number, nota2:number){
        this._nome=nome
        this._nota1=nota1
        this._nota2=nota2
    }
    public get nome(): string {
        return this._nome
    }
    public set nome(value: string) {
        this._nome = value
    }
    public get nota1(): number {
        return this._nota1
    }
    public set nota1(value: number) {
        this._nota1 = value
    }
     public get nota2(): number {
        return this._nota2
    }
    public set nota2(value: number) {
        this._nota2 = value
    }
    calculoMedia(){
        return(this.nota1+this.nota2)/2
    }
    verificarAprovacao(): string {
        if (this.calculoMedia() >= 7) {
            return "Aprovado!"
        } else {
            return "Reprovado!"
        }
    }
    exibirResumo():void{
    alert(`ESTOQUE:
    Nome do Aluno: ${this.nome}
    Nota 1: ${this.nota1}
    Nota 2: ${this.nota2}
    Média Aluno: ${this.calculoMedia()}
    Situação: ${this.verificarAprovacao()}`)
    }   
}
let continuar = "sim";

while (continuar.toLowerCase() === "sim"){
    let nome = String(prompt("Digite o nome do aluno:"))
    let nota1 = Number(prompt("Digite a primeira nota:"))
    let nota2 = Number(prompt("Digite a segunda nota:"))

    let aluno = new Escola(nome, nota1, nota2)

    aluno.exibirResumo()

    continuar = String(prompt("Deseja cadastrar outro aluno? (sim/não)"))
}
}
