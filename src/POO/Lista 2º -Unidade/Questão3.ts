// 3. Classe Retângulo: Crie uma classe que modele um retângulo:
// A. Atributos: LadoA, LadoB (ou Comprimento e Largura, ou Base e Altura, a escolher)
// B. Métodos:
//  Mudar valor dos lados,
//  Retornar valor dos lados,
//  Calcular Área,
//  Calcular Perímetro.

class Retangulo{
    Comprimento:number
    Largura:number

    constructor(C:number, L:number) {
        this.Comprimento = C
        this.Largura = L
    }
    mudar_valorLados(LadoC:number, LadoL:number){
        this.Comprimento = LadoC
        this.Largura = LadoL
    }
    calcularArea(){
        return this.Comprimento*this.Largura
        
    }
    calcularPerimetro(){
        return (this.Comprimento+this.Largura)*2
        
    }
    exibirResumo():void{
        alert(`Valor Comprimento: ${this.Comprimento}
            Valor Largura: ${this.Largura}
            Área (pisos): ${this.calcularArea()}
            Perímetro (rodapés): ${this.calcularPerimetro()}`)

    }
}
let C:number=0, L:number=0
let novoValor:Retangulo = new Retangulo(C,L)

let op=-1
while(op !=0){
    alert("Digite:  (1) Para informar os valores | (2) Para alterar os valores | (3) Para exibir os valores | Caso deseje parar, digite (0) ")
    op=Number(prompt())
    if(op==1){
        C = Number(prompt("Informe o Comprimento: "));
        L = Number(prompt("Informe a Largura: "));
        novoValor.mudar_valorLados(C, L);
    }
    else if(op==2){
        let LadoC=Number(prompt("Informe o novo valor de comprimento: "))
        let LadoL=Number(prompt("Informe o novo valor da largura"))
        novoValor.mudar_valorLados(LadoC,LadoL)
    }
    else if(op==3){
        novoValor.exibirResumo()
    }
}