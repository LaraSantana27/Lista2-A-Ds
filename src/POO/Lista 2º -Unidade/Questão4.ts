// 4. Crie um programa que utilize a classe acima. Ele deve pedir ao usuário que informe as medidas de um
// local. Depois, deve criar um objeto com as medidas e calcular a quantidade de pisos e de rodapés
// necessárias para o local.

class Retangulo {
    Comprimento: number;
    Largura: number;

    constructor(C: number, L: number) {
        this.Comprimento = C
        this.Largura = L
    }
    calcularArea(): number {
        return this.Comprimento * this.Largura
    }

    calcularPerimetro(): number {
        return (this.Comprimento + this.Largura) * 2
    }
}
let comprimento = Number(prompt("Informe o comprimento do local:"))
let largura = Number(prompt("Informe a largura do local:"))

let local = new Retangulo(comprimento, largura)

alert(`Medidas do local:
    Comprimento: ${comprimento} m
    Largura: ${largura} m
    Quantidade de pisos necessária: ${local.calcularArea()} m²
    Quantidade de rodapés necessária: ${local.calcularPerimetro()} m`
)
