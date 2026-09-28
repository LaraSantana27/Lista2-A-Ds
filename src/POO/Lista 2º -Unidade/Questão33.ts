// 33. Crie um sistema de gestão de empréstimos para a biblioteca do campus. A superclasse abstrata Obra
// possui os atributos privados título e autor, e declara o método abstrato registrarAtraso(diasDeAtraso)
// que deve ser sobrescrito pelas subclasses. LivroFisico calcula uma multa de R$ 2,50 por dia, enquanto
// ArtigoDigital não gera multa, mas registra uma string de advertência ao usuário. O bibliotecário
// informa continuamente o título e os dias de atraso de cada devolução. O sistema chama
// registrarAtraso() polimorficamente para cada objeto e, ao encerrar, exibe o valor total de multas a ser
// recolhido pela biblioteca.
// Requisitos mínimos:
// • Superclasse abstrata Obra com método abstrato registrarAtraso(dias).
// • LivroFisico retorna valor de multa; ArtigoDigital retorna mensagem de advertência.
// • Atributos titulo e autor privados, acessíveis apenas por getters.
// • Polimorfismo: percorrer lista com tipo Obra e chamar registrarAtraso().
// • Acumular e exibir total de multas ao final.

export function questãoPOO33():void{

abstract class Obra {
    private _titulo:string
    private _autor:string

    constructor(titulo:string, autor:string) {
        this._titulo=titulo
        this._autor=autor
    }

    public get titulo(): string {
        return this._titulo
    }

    public get autor(): string {
        return this._autor
    }
    abstract registrarAtraso(dias: number): number

}

class LivroFisico extends Obra {
    registrarAtraso(dias: number):number{
        return dias * 2.50
    }
}

class ArtigoDigital extends Obra {
    registrarAtraso(dias: number):number{
        alert(`Advertência: O livro "${this.titulo}" foi devolvido com ${dias} dias de atraso.`)

        return 0
    }
}

let obras: Obra[] = []
let diasAtraso: number[] = []
let obra:Obra
let op = 0

while (op !== 2) {
    let tipo = Number(prompt("Informe o tipo de obra: (1-Livro Físico / 2-Artigo Digital)"))

    let titulo = String(prompt("Informe o titulo da obra: "))
    let autor = String(prompt("Informe o autor da obra: "))
    let dias = Number(prompt("Informe a quantidade de dias de atraso:"))
    diasAtraso.push(dias)
    
    if (tipo == 1) {
        obra = new LivroFisico(titulo, autor)
        obras.push(obra)
    } 
    else if (tipo == 2) {
        obra = new ArtigoDigital(titulo, autor)
        obras.push(obra)
    } 
    else {
        alert("Opção inválida!")
    }

    op = Number(prompt("Deseja cadastrar outra devolução? (1-Sim / 2-Não)"))
    }

    let totalMultas = 0

    for (let i = 0; i < obras.length; i++) {
        totalMultas += obras[i].registrarAtraso(diasAtraso[i])
    }
    alert(
        `Total de multas a recolher: R$ ${totalMultas.toFixed(2)}`
    )
}