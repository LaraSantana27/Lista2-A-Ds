// 7. Uma empresa quer cadastrar funcionários e aplicar aumento salarial. O sistema deve pedir nome,
// cargo e salário. Crie um método que receba um percentual de aumento e atualize o salário do
// funcionário, exibindo o seu nome e novo valor.

export function questãoPOO7():void{

class Funcionario{
    nome:string
    cargo:string
    salario:number

    constructor(nome:string, cargo:string, salario:number){
        this.nome=nome
        this.cargo=cargo
        this.salario=salario
    }
    aumentoSalarial(percentual:number):number{
        this.salario =+ this.salario + (this.salario * percentual / 100)
        
        return this.salario
    }

    exibirFuncionario(){       
        alert(`INFORMAÇÕES:
    Nome: ${this.nome}
    Cargo: ${this.cargo}
    Novo Salário: ${this.salario}`)
    }
}
let nome=String(prompt("Informe o nome do Funcionário: "))
let cargo=String(prompt("Informe o cargo do Funcionário: "))
let salario=Number(prompt("Informe o valor do salário: "))
let percentual=Number(prompt("Informe o percentual de aumento: "))

let funcionario = new Funcionario(nome, cargo, salario)
funcionario.aumentoSalarial(percentual)
funcionario.exibirFuncionario()
}