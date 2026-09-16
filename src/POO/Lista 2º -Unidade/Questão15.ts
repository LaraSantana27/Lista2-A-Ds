// 15. Herança Encapsulamento
// Uma empresa possui dois tipos de funcionários: horistas (pagos por hora trabalhada) e assalariados
// (salário fixo mensal). Crie uma hierarquia de classes com Funcionario como superclasse e
// FuncionarioHorista e FuncionarioAssalariado como subclasses. O programa deve solicitar os dados via
// teclado e calcular o salário de cada um.

export function questãoPOO15():void{
abstract class Funcionario{
    public nome:string

    constructor(nome:string){
        this.nome=nome
    }
    abstract calcularSalario():number
    
    exibirSalario(): void{
        console.log(`Nome: ${this.nome} o seu salário é: ${this.calcularSalario()}`)
    }

}

class FuncionarioAssalariado extends Funcionario{
    salarioFixo:number

    constructor(nome:string, salarioFixo:number){
        super(nome)
        this.salarioFixo=salarioFixo
        
    }
    calcularSalario(): number{
        return this.salarioFixo
    }
}

class FuncionarioHorista extends Funcionario{
    valorHoras: number
    quantHoras: number

    constructor(nome:string,valorHoras:number, quantHoras: number){
        super(nome)
        this.valorHoras=valorHoras
        this.quantHoras=quantHoras
    }
    calcularSalario(): number{
        let salarioFinal = this.quantHoras * this.valorHoras
        return salarioFinal
    }

}

let funcionarioASS: FuncionarioAssalariado = new FuncionarioAssalariado("Lara",1900)
funcionarioASS.exibirSalario()

let funcionarioH: FuncionarioHorista = new FuncionarioHorista("Luiza", 80, 16)
funcionarioH.exibirSalario()
}