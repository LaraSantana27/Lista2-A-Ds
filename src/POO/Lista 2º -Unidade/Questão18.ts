// 18. Folha de Pagamento Unificada do IFS
// O setor de Recursos Humanos necessita de uma ferramenta para calcular a folha salarial dos
// colaboradores. Todo colaborador possui nome, idade e um salário base privado. Um Professor recebe
// um acréscimo de 20% sobre o salário base por dedicação exclusiva. Um Técnico Administrativo
// recebe um valor fixo extra de auxílio-alimentação. O programa deve perguntar qual funcionário
// deseja cadastrar e rodar em um laço solicitando o cadastro dos funcionários do mês. Após coletar
// todos os dados, o software deve apresentar o resumo dos salários, acionar o método de cálculo salarial
// específico de cada um e exibir o custo que a instituição tem com professor, técnico Administrativo e o
// custo total que a instituição terá naquele mês.

export function questãoPOO18():void{
abstract class Funcionario{
    public nome:string
    public idade:number
    private salarioBase:number

    constructor(nome:string, idade:number,salarioBase:number){
        this.nome=nome
        this.idade=idade
        this.salarioBase=salarioBase
    }

    protected getsalarioBase(): number{
        return this.salarioBase
    }

    abstract calcularSalario():number

    exibirResusmo():void{
        console.log(``)
    }
}
class Professor extends Funcionario{
    calcularSalario():number{
        return this.getsalarioBase() * 1.20
    }
}

class TecnicoAdministrativo extends Funcionario{
    private auxilio: number

    constructor(nome:string, idade:number, salarioBase: number, auxilio:number){
        super(nome,idade,salarioBase)
        this.auxilio=auxilio
    }
    calcularSalario():number{
        return this.getsalarioBase() + this.auxilio
    }
}

const funcionario:Funcionario[]=[]

let op=Number(prompt("Informe o cargo: (1)-Professor | (2)-Tec.Administrativo | (-1)-Para encerrar o programa"))
op=0
while(op!==-1){
    const nome = String(prompt("nome:"))
    const idade = Number(prompt("idade:"))
    const salarioBase = Number(prompt("Salario Base: "))
    if(op==1){
        const professor = new Professor(nome,idade,salarioBase)
        funcionario.push(professor)
    }
    else if (op == 2) {
        const auxilio = Number(prompt("Auxílio Alimentação:"));
        const tecnico = new TecnicoAdministrativo(nome, idade, salarioBase, auxilio);
        funcionario.push(tecnico)
}
    else{
        console.log("Opção Invalida!")
    }

    op=Number(prompt("Informe o cargo: (1)-Professor | (2)-Tec.Administrativo | (-1)-Para encerrar o programa"))
}
}