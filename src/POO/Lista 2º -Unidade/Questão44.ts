

// 44. Repetição Encapsulamento Arrays
// Gestão de Manutenção de Computadores
// O setor de suporte técnico do campus precisa de um controle de chamados. Crie a classe Chamado
// com os atributos privados id, descricaoEquipamento, laboratorio e concluido (boolean). Crie
// um método finalizarChamado() que altera o status de concluido para true. O programa deve
// pedir ao técnico para cadastrar os chamados do dia em um array. Após o cadastro, o programa entra
// em um novo laço permitindo que o técnico informe o id dos chamados que ele conseguiu resolver no
// turno para marcá-los como concluídos. Ao final, o sistema exibe o relatório de quantos chamados
// foram atendidos e quantos continuam pendentes.


export function questãoPOO44():void{

class Chamado {
    private _id: number
    private _descricaoEquipamento: string
    private _laboratorio: string
    private _concluido: boolean

    constructor( id: number, descricaoEquipamento: string, laboratorio: string ) {
        this._id = id 
        this._descricaoEquipamento = descricaoEquipamento
        this._laboratorio = laboratorio 
        this._concluido = false
    }
    public get id(): number {
        return this._id
    }
    public set id(value: number) {
        this._id = value
    }
    public get descricaoEquipamento(): string {
        return this._descricaoEquipamento
    }
    public set descricaoEquipamento(value: string) {
        this._descricaoEquipamento = value
    }
    public get laboratorio(): string {
        return this._laboratorio
    }
    public set laboratorio(value: string) {
        this._laboratorio = value
    }
    public get concluido(): boolean {
        return this._concluido
    }
    public set concluido(value: boolean) {
        this._concluido = value
    }
    public finalizarChamado(): void { 
        this._concluido = true 
    }
}

let listaChamados: Chamado[] = [] 
let id: number, descricaoEquipamento: string, laboratorio: string 
let chamado: Chamado 
let op: number = 0
while (op != 2) {
    id = Number(prompt(`Insira o ID do chamado: `))
    descricaoEquipamento = String(prompt(`Insira a descrição do equipamento: `))
    laboratorio = String(prompt(`Insira o laboratório: `))

    chamado = new Chamado(id, descricaoEquipamento, laboratorio)
    listaChamados.push(chamado)

    op = Number(prompt(`Deseja cadastrar outro chamado? (1 - Sim | 2 - Não): `))
}

let idResolvido: number = 0
while (idResolvido != -1) {
    idResolvido = Number(prompt(`Insira o ID do chamado resolvido ou -1 para sair: `))
    if (idResolvido != -1) {
        for (let i = 0; i < listaChamados.length; i++) {
            if (listaChamados[i].id == idResolvido) {
                listaChamados[i].finalizarChamado()
            }
        }
    }
}
let atendidos: number = 0
let pendentes: number = 0

for (let i = 0; i < listaChamados.length; i++) {

    if (listaChamados[i].concluido == true) {
        atendidos++

    } else {
        pendentes++
    }
}
alert(`Chamados atendidos: ${atendidos} | Chamados pendentes: ${pendentes}`)
}
