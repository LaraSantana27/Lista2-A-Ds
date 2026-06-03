//Atributos
class Funcionario{
    nome: string;
    cargo: string;
    salario: number;

//Constructor
    constructor(n: string, c: string, s: number){
        this.nome = n;
        this.cargo = c;
        this.salario = s;
    }

//Método
    exibirResumo(): void {
        console.log(`Funcionário: ${this.nome} | Cargo: ${this.cargo} | Salário: ${this.salario}`)
    }
}


let continuar: string = ""


while(continuar != "N"){
    let n:string, c:string, s:number
    n = String(prompt("Informe o nome do Funcionário: "))
    c = String(prompt("Informe o seu Cargo: "))
    s = Number(prompt("Informe o seu Salário: "))

    let novoFunc = new Funcionario(n,c,s)
    novoFunc.exibirResumo()
    continuar = String(prompt("deseja continuar? S-Sim, N-Não")).toUpperCase()
}