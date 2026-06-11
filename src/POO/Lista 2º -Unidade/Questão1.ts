// 1. Classe Bola: Crie uma classe que modele uma bola:
//  Atributos: Cor, circunferência, material
//  Métodos: trocaCor e mostraCor

class Bola {
    cor: string;
    circuferencia: number;
    material: string;

    constructor(c: string, circ: number, m: string){
        this.cor = c;
        this.circuferencia = circ;
        this.material = m;
    }

    trocarCor(novaCor:string){
        this.cor = novaCor
        console.log("Cor alterada")
    }

    exebirResumo():void{
        console.log(`Cor: ${this.cor} | circuferência: ${this.circuferencia} |
        | Máterial: ${this.material} `)
    }
    }

    let c:string="", circ:number=0, m:string=""

    let novaBola:Bola =  new Bola(c,circ,m)

    


    let op=-1
    while (op != 0){
        alert("1-Escolha uma opção: 1-Criar umna nova bola: , 2- Mudar a cor , 3- Mostrar a cor: , 0-Sair")
        
        op=Number(prompt())

        if(op == 1 ){
            c =  String(prompt("Informe a cor que deseja: "))
            circ = Number(prompt("Informe o valor da circuferência: "))
            m = String(prompt("Informe o material: "))
            novaBola = new Bola(c, circ, m)

        }else if(op ==2){
            let novaCor= String(prompt("Informe a nova cor: "))
            novaBola.trocarCor(novaCor)
        }
        else if(op==3){
            novaBola.exebirResumo()
        }
    }

