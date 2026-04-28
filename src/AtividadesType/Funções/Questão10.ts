// 10. Calculadora de IMC com Classificação.
// Um personal trainer precisa de uma ferramenta para avaliar seus alunos.
//  Função calcular_imc(peso, altura): Retorna o resultado da fórmula IMC = peso/altura².
//  Função classificar_imc(valor_imc): Recebe o IMC e retorna uma string:
// o Abaixo de 18.5: &quot;Abaixo do peso&quot;
// o Entre 18.5 e 24.9: &quot;Peso Normal&quot;
// o 25 ou mais: &quot;Sobrepeso&quot;
//  Função exibir_laudo(nome, classificacao): Imprime: &quot;Paciente: [nome] - Status:
// [classificacao]&quot;.
//  Uso: Peça o nome, peso e altura, processe os dados e exiba o laudo.

export function exercicioFun10():void{

let nome:string=String(prompt("Informe o nome"))
let peso:number=Number(prompt("Informe o seu peso:"))
let altura:number=Number(prompt("Informe a altura: "))

function calcular_imc(peso:number,altura:number):number{
    return peso/(altura*altura)
}

function classificar_imc(valor_imc:number):string{

    if(valor_imc<18.5){
        return "Abaixo do peso"
    }
    else if(valor_imc>18.5||valor_imc<24.9){
        return "Abaixo do peso"
    }
    else{
        return"Sobrepeso"
    }
}
function exibir_laudo(nome:string, classificacao:string):void{
    console.log("Paciente: "+nome+" classificação: "+classificacao)

}
 let imc=calcular_imc(peso,altura)
 let classificacao=classificar_imc(imc)
 exibir_laudo(nome,classificacao)
}