// 48. Repetição Encapsulamento Arrays
// Sistema de Monitoramento e Ajuste de Ar-Condicionado de Laboratórios
// Para garantir o clima ideal nos laboratórios de informática do campus, crie um sistema de controle
// centralizado. Crie a classe ArCondicionado com os atributos privados sala, potenciaBTUs e
// temperaturaAtual. O setter de temperaturaAtual deve validar estritamente o intervalo permitido
// de operação (somente aceitar valores entre 16°C e 30°C, emitindo um aviso de erro para tentativas
// fora desta faixa). Crie o método exibirStatus() para mostrar os dados do aparelho. O programa
// deve interagir com o usuário em um laço de repetição solicitando o cadastro de vários aparelhos até
// que o operador decida parar. Em seguida, o sistema abre um menu permitindo que o técnico informe o
// nome da sala para buscar o aparelho no array e ajustar a temperatura do ambiente. Ao final, o
// programa percorre a lista e exibe o relatório final da temperatura de todos os laboratórios.

export function questãoPOO48(): void {

class ArCondicionado {
    private _sala: string
    private _potenciaBTUs: number
    private _temperaturaAtual: number

    constructor(sala: string, potenciaBTUs: number, temperaturaAtual: number) {
            this._sala = sala
            this._potenciaBTUs = potenciaBTUs
            this.temperaturaAtual = temperaturaAtual
            this._temperaturaAtual = 24
        }
    public get sala(): string {
        return this._sala
    }
    public set sala(value: string) {
        this._sala = value
    }
    public get potenciaBTUs(): number {
        return this._potenciaBTUs
    }
    public set potenciaBTUs(value: number) {
        this._potenciaBTUs = value
    }
    public get temperaturaAtual(): number {
        return this._temperaturaAtual
    }
    public set temperaturaAtual(value: number) {
        if (value >= 16 && value <= 30) {
            this._temperaturaAtual = value
        } else {
            alert("Erro: a temperatura deve estar entre 16°C e 30°C.")
        }
        }

    public exibirStatus(): void {
        alert(`AR-CONDICIONADO
                ========================
                Sala: ${this._sala}
                Potência: ${this._potenciaBTUs} BTUs
                Temperatura: ${this._temperaturaAtual}°C
        `)
    }
}

let listaArCondicionados: ArCondicionado[] = []
let continuar = "s"

while (continuar.toLowerCase() == "s") {
    let sala = String(prompt("Informe o nome da sala:"))
    let potenciaBTUs = Number(prompt("Informe a potência em BTUs:"))
    let temperaturaAtual = Number(prompt("Informe a temperatura atual:"))

    let arCondicionado = new ArCondicionado(sala,potenciaBTUs,temperaturaAtual)

    listaArCondicionados.push(arCondicionado)

    continuar = String(prompt("Deseja cadastrar outro aparelho? (s/n)"))
}
    let opcao = 0

    while (opcao != 2) {
        opcao = Number(prompt(`MENU: | 1 - Ajustar temperatura | 2 - Encerrar`))

        if (opcao == 1) {
            let salaBusca = String(prompt("Informe o nome da sala:"))
            let aparelhoEncontrado: ArCondicionado | undefined

            for (let i = 0; i < listaArCondicionados.length; i++) {
                if (listaArCondicionados[i].sala.toLowerCase()== salaBusca.toLowerCase()) {
                    aparelhoEncontrado = listaArCondicionados[i]
                    break
                }
            }
            if (aparelhoEncontrado != undefined) {
                let novaTemperatura = Number(
                    prompt("Informe a nova temperatura:")
                )
                aparelhoEncontrado.temperaturaAtual = novaTemperatura
                aparelhoEncontrado.exibirStatus()
            } else {
                alert("Aparelho não encontrado!")
        }
    }
}
    
let relatorio = `RELATÓRIO FINAL
            ========================`
    for (let i = 0; i < listaArCondicionados.length; i++) {
        relatorio += 
        `Sala: ${listaArCondicionados[i].sala}
        Potência: ${listaArCondicionados[i].potenciaBTUs} BTUs
    Temperatura: ${listaArCondicionados[i].temperaturaAtual}°C`
    }
    alert(relatorio)
}