// 35. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Controle de Clientes do Posto de Saúde
// O posto de saúde municipal necessita de um sistema para organizar o atendimento diário. Todo
// paciente possui nome e número do cartão do SUS privados. Os pacientes dividem-se em
// PacienteComum e PacientePrioritario (que possui um atributo privado para o tipo de prioridade,
// como 'Idoso' ou 'Gestante'). A classe base possui o método exibirFicha(). A classe
// PacientePrioritario sobrescreve este método para incluir a informação da prioridade com um
// destaque no texto. O operador deve cadastrar a fila de pacientes do dia via teclado. Ao final do
// cadastro, o programa varre a lista, imprime as fichas de atendimento polimorficamente e exibe a
// quantidade total de pacientes prioritários atendidos.

export function questãoPOO35():void{

abstract class Clientes{
    private _nome: string
    private _Ncartao: number

    constructor(nome:string, Ncartao:number){
        this._nome=nome
        this._Ncartao=Ncartao
    }

        public get nome(): string {
        return this._nome
    }
    public set nome(value: string) {
        this._nome = value
    }
    public get Ncartao(): number {
        return this._Ncartao
    }
    public set Ncartao(value: number) {
        this._Ncartao = value
    }
    abstract exibirFicha():void

}

class Comum extends Clientes{
    exibirFicha(): void {
        alert(`INFORMAÇÕES:
    Nome: ${this.nome}
    Número do Cartão: ${this.Ncartao}`)
    }
}

class Prioritario extends Clientes{
    private _tipo: string

    constructor(nome:string, Ncartao:number, tipo:string){
        super(nome,Ncartao)
        this._tipo=tipo
    }

    public get tipo(): string {
    return this._tipo
    }

    exibirFicha(): void {
        alert(`INFORMAÇÕES:
    Nome: ${this.nome}
    Número do Cartão: ${this.Ncartao}
    Tipo de prioridade: ${this._tipo}`)
    }
}
let pacientes: Clientes [] = []
let op = 0
let comum:Comum
let prioritario:Prioritario

while (op != 2){
    let tipo:number = Number(prompt(`Informe o tipo do paciente (1 - Paciente comum | 2 - Paciente prioritário): `))
    let nome=String(prompt("Informe o nome do paciente: "))
    let numeroC=Number(prompt("Informe o número do cartão: "))

    if(tipo==1){
        comum = new Comum(nome, numeroC)
        pacientes.push(comum)
    }
    else if(tipo==2){
        let tipoPrioritario:string=String(prompt("Informe se o passiente é Idoso ou Gestante: "))
        prioritario = new Prioritario(nome, numeroC, tipoPrioritario)
        pacientes.push(prioritario)
    }
    else{
        alert("Opçaõ Inválida: ")
    }
    op=Number(prompt("Deseja cadastrar outro paciente? (1-sim / 2-não) "))
}
let totalPrioritarios = 0
for(let i=0; i<pacientes.length; i++){
    pacientes[i].exibirFicha()

    if (pacientes[i] instanceof Prioritario) {
        totalPrioritarios++
    }
}
alert(`Total de pacientes prioritários: ${totalPrioritarios}`)
}





