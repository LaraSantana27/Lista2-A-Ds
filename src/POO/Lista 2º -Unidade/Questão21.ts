// 21. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Concurso de Projetos de Extensão Reforest
// O projeto socioambiental "Flor&Ser" abriu inscrições para novas propostas de reflorestamento no
// campus. Cada projeto inscrito possui título, coordenador e uma nota de avaliação avaliada de forma
// estrita (protegida por métodos de validação para que não receba valores fora do intervalo de 0 a 10).
// Existem Projetos Verdes (focados em plantio urbano) e Projetos Culturais (focados em conscientização).
// O usuário deve preencher a lista de projetos avaliados através do terminal. O programa deve calcular a
// média aritmética de todas as notas usando estruturas de array e, em seguida, listar de forma inversa à
// inscrição quais projetos ganharam nota acima da média da competição.

export function questãoPOO21():void{

abstract class Projeto{
    private _titulo: string
    private _coordenador: string
    private _nota: number

    constructor(titulo:string, coordenador:string, nota:number){
        this._titulo=titulo
        this._coordenador=coordenador
        this._nota = nota
    }
    public get titulo(): string {
        return this._titulo
    }
    public set titulo(value: string) {
        this._titulo = value
    }
    public get coordenador(): string {
        return this._coordenador
    }
    public set coordenador(value: string) {
        this._coordenador = value
    }
    public get nota(): number {
        return this._nota
    }
    public set nota(value: number) {
        this._nota = value
    }

    validarNota(valor:number): number {
        if (valor < 0) return 0
        if (valor > 10) return 10
        return valor
    }

    abstract categoria(): string
}

class ProjetoVerde extends Projeto{
    categoria(): string {
        return "Projeto Verde (Plantio Urbano)"
    }
}

class ProjetoCultural extends Projeto{
    categoria(): string {
        return "Projeto Cultural (Conscientização)"
    }
}

let projetos: Projeto[] = []
let continuar=Number(prompt("Informe 1-Inscrever Projeto | 2-parar"))
let verde:ProjetoVerde
let cultural:ProjetoCultural

while (continuar !== 2) {
    let tipo = Number(prompt("Tipo de projeto: 1-Verde | 2-Cultural"))
    let titulo = String(prompt("Informe o título do projeto:"))
    let coordenador = String(prompt("Informe o coordenador do projeto:"))
    let nota = Number(prompt("Informe a nota de avaliação (0 a 10):"))

    if (tipo == 1) {
        verde = new ProjetoVerde(titulo, coordenador, nota)
        projetos.push(verde)
    } 
    else if (tipo == 2) {
        cultural = new ProjetoCultural(titulo, coordenador, nota)
        projetos.push(cultural)
    } 
    else {
        alert("Tipo inválido!")
    }
    continuar = Number(prompt("Deseja inscrever outro projeto? (1-sim/2-não)"))
}

let somaNotas = 0
for (let i = 0; i < projetos.length; i++) {
    somaNotas += projetos[i].nota
}
let media = somaNotas / projetos.length

let acimaDaMedia: Projeto[] = []
for (let i = 0; i < projetos.length; i++) {
    if (projetos[i].nota > media) {
        acimaDaMedia.push(projetos[i])
    }
}
acimaDaMedia.reverse()

let listagem = "=== PROJETOS ACIMA DA MÉDIA (ordem inversa à inscrição) ==="

for (let i = 0; i < acimaDaMedia.length; i++) {
    listagem += `${acimaDaMedia[i].titulo} (${acimaDaMedia[i].categoria()}) - Nota: ${acimaDaMedia[i].nota}`
}

alert(`Média das notas: ${media}
${listagem}`)

}
