// 8. Uma empresa precisa de um sistema simples para cadastrar seus funcionários. O sistema deve solicitar
// ao usuário o nome, o cargo e o salário de vários funcionários. Para cada funcionário cadastrado, deve
// ser criado um objeto que armazene essas informações. Ao final, o sistema deve exibir um resumo de
// todos os funcionários cadastrados, utilizando um método da classe.

export function questãoPOO8():void{

class Funcionario{
    nome:string
    cargo:string
    salario:number

    constructor(nome:string, cargo:string, salario:number){
        this.nome=nome
        this.cargo=cargo
        this.salario=salario
    }
    exibirFuncionario():void{       
        alert(`INFORMAÇÕES:
    Nome: ${this.nome}
    Cargo: ${this.cargo}
    Salário: ${this.salario}`)
    }    
}

const listarFuncionarios:Funcionario[]=[]

let entrada=String(prompt("Deseja cadastrar um funcionário? DIGITE: (S) para continuar | (N) Parar programa ")).toUpperCase()

    while(entrada == "S"){
        let nome=String(prompt("Informe o nome do Funcionário:"))
        let cargo=String(prompt("Informe o cargo do Funcionário: "))
        let salario=Number(prompt("Informe o valor do salário: "))


        const novoFuncionario = new Funcionario(nome, cargo, salario)
        listarFuncionarios.push(novoFuncionario)

        entrada=String(prompt("Deseja cadastrar um funcionário? DIGITE: (S) para continuar | (N) Parar programa ")).toUpperCase()
    }
for(let i=0; i < listarFuncionarios.length; i++){
    listarFuncionarios[i].exibirFuncionario()
}

}