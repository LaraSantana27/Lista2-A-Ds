// 7. Uma empresa quer cadastrar funcionários e aplicar aumento salarial. O sistema deve pedir nome,
// cargo e salário. Crie um método que receba um percentual de aumento e atualize o salário do
// funcionário, exibindo o seu nome e novo valor.


class Funcionario{
    nome: string;
    cargo: string;
    salario: number;

    constructor(n: string, c: string, s: number){
        this.nome = n;
        this.cargo = c;
        this.salario = s;
    }

    exibirResumo(): void {
        console.log(`Funcionário: ${this.nome} | Cargo: ${this.cargo} | Salário: ${this.salario}`)
    }
}

