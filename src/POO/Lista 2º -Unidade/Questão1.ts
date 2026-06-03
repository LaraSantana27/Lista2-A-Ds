// 1. Classe Bola: Crie uma classe que modele uma bola:
//  Atributos: Cor, circunferência, material
//  Métodos: trocaCor e mostraCor

class bola{
    cor: string;
    circunferencia: number;
    material: string;

    constructor(c: string, circ: number, m: string){
        this.cor = c
        this.circunferencia = circ
        this.material = m
    }

    exibirResumo(): void{
        console.log(`Cor: ${this.cor} | Circunferência: ${this.circunferencia} | Material: ${this.material} `)
    }
}

let c:string , circ:number , m: string
c = String(prompt("Informe a cor da bola: "))
circ = Number(prompt("Informe a circunferência: "))
m = String(prompt("Informe o material da bola: "))

let func = new bola(c,circ,m)
func.exibirResumo()