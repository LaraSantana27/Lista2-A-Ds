// 4. Ler dois valores e imprimir uma das três mensagens a seguir:
// ● ‘Números iguais’, caso os números sejam iguais;
// ● ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// ● ‘Segundo maior’, caso o segundo seja maior que o primeiro.

//npx tsc
export function exercicio4Cond():void{

let numero1 = prompt("Informe o primeiro número: ")
let numero2 = prompt("Informe o segundo número: ")

let a: number=Number(numero1)
let b: number=Number(numero2)

if(a==b){
    console.log("Números iguais!")
}
else if(a>b){
    console.log("Primeiro é maior!")
}
else if(a<b){
    console.log("Segundo é maior!")
}
}