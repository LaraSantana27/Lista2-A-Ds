// 36. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Portal de Cursos e Treinamentos Online
// Uma plataforma de ensino quer gerenciar a emissão de certificados de seus estudantes. A classe base
// Curso possui título e carga horária privados. A classe CursoLivre emite certificado automaticamente
// ao concluir as horas. A classe CursoTecnico possui um atributo adicional para o número do projeto
// final e só permite emitir o certificado se o projeto tiver nota aprovada (maior ou igual a 7). O
// programa deve solicitar repetidamente os dados dos cursos concluídos por um aluno e guardá-los em
// um array. No final, o sistema percorre a lista e dispara o método emitirCertificado() de cada
// curso, exibindo quais certificados foram liberados e quais ficaram pendentes.

export function questãoPOO36():void{

abstract class Curso{
    private _titulo: string
    private _cargaHoraria: number

    constructor(titulo:string, cargaHorario:number){
        this._titulo=titulo
        this._cargaHoraria=cargaHorario
    }
        public get titulo(): string {
        return this._titulo
    }
    public set titulo(value: string) {
        this._titulo = value
    }
        public get cargaHoraria(): number {
        return this._cargaHoraria
    }
    public set cargaHoraria(value: number) {
        this._cargaHoraria = value
    }

    abstract emitirCertificado():void
    
}
class CursoLivre extends Curso{
        emitirCertificado() {
            alert(`${this.titulo}: Certificado liberado!`)
        }
    }

class CursoTecnico extends Curso{
    private _notaProjeto: number

        constructor(titulo:string, cargaHoraria:number, notaProjeto:number){
            super(titulo, cargaHoraria)
            this._notaProjeto=notaProjeto
        }

    public get numeroProjeto(): number {
        return this._notaProjeto
    }
    public set numeroProjeto(value: number) {
        this._notaProjeto = value
    }

    emitirCertificado(){
        if (this._notaProjeto >= 7){
                alert(`${this.titulo}: Certificado liberado!`)
            }
            else{
                alert(`${this.titulo}: Certificado negado!`)
            }
    }
}

let cursos:Curso[]=[]
let op=0
let livre:CursoLivre
let tecnico:CursoTecnico

while(op !=2){
    let tipo:number=Number(prompt("Informe qual tipo de curso: (1-Curso Livre | 2-Curso Tecnico) "))

    if(tipo == 1){
        let tituloL=String(prompt("Informe o titulo do curso: "))
        let cargaHL=Number(prompt("Informe a carga horária: "))

        livre = new CursoLivre(tituloL, cargaHL)
        cursos.push(livre)
    }

    else if(tipo == 2){
        let tituloT=String(prompt("Informe o titulo do curso: "))
        let cargaHT=Number(prompt("Informe a carga horária: "))
        let nota=Number(prompt("Informe a nota: "))

        tecnico = new CursoTecnico(tituloT, cargaHT, nota)
        cursos.push(tecnico)
    }
    op=Number(prompt("Deseja informar outro curso? (1-sim / 2-não) "))
}

for (let certificado of cursos){
    certificado.emitirCertificado()
}
}