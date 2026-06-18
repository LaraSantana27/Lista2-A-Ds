// 2. Classe Quadrado: Crie uma classe que modele um quadrado:
//  Atributos: Tamanho do lado
//  Métodos: Mudar valor do Lado,
//  Retornar valor do Lado e calcular Área;

class Quadrado{
    lado:number

    constructor(tamanho:number){
        this.lado=tamanho
    }
    calcularArea(){
        return this.lado*this.lado
    }
    mudarLado(novoLado:number){
        this.lado=novoLado
    }
    retornarLado():number{
        return this.lado
    }
    exibirResultado(): void{
        alert(`Valor dos Lados: ${this.retornarLado()} | Calculo da área: ${this.calcularArea()}`)
    }

}
let mudarValor:Quadrado = new Quadrado(0)
let op=-1
while(op != 0){
    alert('Escolha uma opção: (1)Informar Valores dos Lados | (2) Mudar Valores | (3) Exibir resultado | (0) Caso deseje encerrrar digite')
    op=Number(prompt())

    if(op==1){
        let tamanho=Number(prompt("Informe o tamanho do quadrado:"))
        mudarValor.mudarLado(tamanho)
    }
    else if (op==2){
        let novoLado=Number(prompt("Informe o novo tamanho: "))
        mudarValor.mudarLado(novoLado)
    }
    else if (op==3){
        mudarValor.exibirResultado()
    }
}