// 14. Arrays Repetição Encapsulamento
// Uma biblioteca precisa catalogar seus livros. Crie uma classe Livro com título, autor, ano de
// publicação e disponibilidade (boolean). O programa deve permitir cadastrar até 15 livros via teclado,
// listar todos os disponíveis e registrar o empréstimo de um livro pesquisado pelo título.

export function questãoPOO14():void{

class Livro{
    private _titulo: string
    private _autor: string
    private _anoPublicado: number  
    private _disponibilidade: boolean

    constructor(titulo:string, autor:string, anoPublicado:number, disponibilidade:boolean){
        this._titulo=titulo
        this._autor=autor
        this._anoPublicado=anoPublicado
        this._disponibilidade=disponibilidade
    }

        public get titulo(): string {
        return this._titulo
        }
        public set titulo(value: string) {
        this._titulo = value
        }
        public get autor(): string {
        return this._autor
        }
        public set autor(value: string) {
        this._autor = value
        }
        public get anoPublicado(): number {
        return this._anoPublicado
        }
        public set anoPublicado(value: number) {
        this._anoPublicado = value
        }
        public get disponibilidade(): boolean {
        return this._disponibilidade
        }
        public set disponibilidade(value: boolean) {
        this._disponibilidade = value
        }

    public listarLivros():void{
        alert(`Livro: ${this._titulo} 
            Autor: ${this._autor} 
            Ano Publicado: ${this._anoPublicado}
            Disponibilidade: ${this._disponibilidade}`)
    }
}
let listarLivro: Livro[] = []
let quantidade: number = 0

quantidade = Number(prompt("Informe quantos exemplares serão cadastrados: "))

for (let i = 0; i < quantidade; i++) {

    let tit: string = ""
    let aut: string = ""
    let ano: number
    let disp: string
    let disponibilidade: boolean

    tit = String(prompt("Informe o título:"))
    aut = String(prompt("Informe o nome do autor:"))
    ano = Number(prompt("Informe o ano de publicação:"))
    disp = String(prompt("Tem disponibilidade? Sim-S | Não-N:"))?.toUpperCase()

    if (disp == "S") {
        disponibilidade = true
    }
    else {
        disponibilidade = false
    }

    let novoLivro = new Livro(tit, aut, ano, disponibilidade)

    listarLivro.push(novoLivro)
}
}