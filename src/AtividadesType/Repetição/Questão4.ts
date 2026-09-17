// 4. Faça um programa que leia um conjunto de números (X) e imprima a quantidade de
// números pares (QPares) e a quantidade de números ímpares (QImpares) lidos. Admita que o
// valor -1 é utilizado como sentinela para fim de leitura.

export function exercicio4Rep():void{

let Qpares=0, QImpares=0
let nume=Number(prompt("Informe valores, caso deseje parar digite (-1): "))

while(nume!==-1){
    if(nume %2!==0){
        QImpares++
    }
    else{
        Qpares++
    }
nume=Number(prompt("Informe valores, caso deseje para digite (-1): "))
}
console.log("Quantidade pares: ",Qpares)
console.log("Quantidade impares: ",QImpares)
}
