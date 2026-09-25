// 19. Repetição Encapsulamento Arrays
// Monitoramento de Sensores Industriais
// Uma fábrica instalou sensores para monitorar sua produção. Todo sensor possui um código identificador
// e a última leitura registrada. Um Sensor de Temperatura exibe sua leitura acompanhada da unidade "°C"
// e possui um alerta caso passe dos 40°C. Um Sensor de Pressão exibe sua leitura acompanhada de "atm" e
// alerta se passar de 5 atm. O programa deve solicitar repetidamente que o técnico digite os valores
// lidos pelos sensores espalhados pela fábrica, armazenando-os em um array. No final, o programa filtra
// a lista e exibe o relatório de todos os sensores que dispararam alertas de perigo.

export function questãoPOO19():void{

abstract class Sensor{
    private _codigo: string
    private _leitura: number

    constructor(codigo:string, leitura:number){
        this._codigo=codigo
        this._leitura=leitura
    }
    public get codigo(): string {
        return this._codigo
    }
    public set codigo(value: string) {
        this._codigo = value
    }
    public get leitura(): number {
        return this._leitura
    }
    public set leitura(value: number) {
        this._leitura = value
    }

    abstract exibirLeitura(): string

    abstract emAlerta(): boolean
}

class SensorTemperatura extends Sensor{
    exibirLeitura(): string {
        return `Sensor ${this.codigo}: ${this.leitura}°C`
    }
    emAlerta(): boolean {
        return this.leitura > 40
    }
}

class SensorPressao extends Sensor{
    exibirLeitura(): string {
        return `Sensor ${this.codigo}: ${this.leitura}atm`
    }
    emAlerta(): boolean {
        return this.leitura > 5
    }
}

let sensores: Sensor[] = []
let continuar=Number(prompt("Informe 1-cadastrar | 2-parar"))

while (continuar !== 2) {
    let tipo = Number(prompt("Tipo de sensor: 1-Temperatura | 2-Pressão"))
    let codigo = String(prompt("Informe o código identificador do sensor:"))
    let leitura = Number(prompt("Informe a leitura registrada:"))

    if (tipo == 1) {
        sensores.push(new SensorTemperatura(codigo, leitura))
    }
    else if (tipo == 2) {
        sensores.push(new SensorPressao(codigo, leitura))
    }
    else {
        alert("Tipo inválido!")
    }
    continuar=Number(prompt("Informe 1-cadastrar | 2-parar"))
}

let sensoresEmAlerta: Sensor[] = []
for (let i = 0; i < sensores.length; i++) {
    if (sensores[i].emAlerta()) {
        sensoresEmAlerta.push(sensores[i])
    }
}

if (sensoresEmAlerta.length > 0) {
    let relatorio = "=== SENSORES EM ALERTA ==="
    for (let i = 0; i < sensoresEmAlerta.length; i++) {
        relatorio += sensoresEmAlerta[i].exibirLeitura()
    }
    alert(relatorio)
} else {
    alert("Nenhum sensor disparou alerta.")
}

}
