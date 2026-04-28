// 1. Crie um programa que leia um número e informe se ele é:
//  Par ou Ímpar
//  Positivo ou Negativo

export function exercicio1Cond():void{

let num = prompt("Informe um valor: ")
let digito:number=Number(num)

if(digito % 2!==0){
    console.log("Número ímpar")
}
    else{
        console.log("Número Par")
    }

if(digito > 0){
    console.log("Número positivo!")
}
    else{
        console.log("Número negativo!")
    }
}