// 3. Faça um programa que leia nome, horas trabalhadas, salário-hora e sexo de um grupo de
// operários. Ao final de cada solicitação pergunte se o usuário quer continuar ou não o
// programa.
// Calcule e imprima:
// ● Salário total dos funcionários, o maior salário, juntamente com o nome de quem o
// recebeu;
// ● O número de funcionários do sexo masculino e feminino cadastrado;
// ● O percentual de funcionários homens e mulheres cadastrados.

export function exercício3Rep():void{

let totalSalarios = 0
let maiorSalario = 0
let nomeMaiorSalario = ""
let qtdFem = 0
let qtdMasc = 0
let totalFuncionarios = 0

let opc:number=Number(prompt("Caso deseje encerrar, digite (-1)"))
let nome:string=String(prompt("Informe o nome: "))
let horas:number=Number(prompt("Informe as horas trabalhadas: "))
let salarioHora:number=Number(prompt("Informe o salário por hora: "))
let sexo:string=String(prompt("Informe o sexo (M)Masculino e (F)Feminino: ")).toUpperCase()


while(opc!==-1){

let salarioTotal: number = horas * salarioHora

totalSalarios += salarioTotal

if (salarioTotal > maiorSalario) {
        maiorSalario = salarioTotal
        nomeMaiorSalario = nome
    }

    if (sexo === "M") {
        qtdMasc++
    } else if (sexo === "F") {
        qtdFem++
    }

        totalFuncionarios++
    opc=Number(prompt("Caso deseje encerrar, digite (-1)"))
    nome=String(prompt("Informe o nome: "))
    horas=Number(prompt("Informe as horas trabalhadas: "))
    salarioHora=Number(prompt("Informe o salário por hora: "))
    sexo=String(prompt("Informe o sexo (M)Masculino e (F)Feminino: ")).toUpperCase()
}

if (totalFuncionarios === 0){
alert("Nenhum funcionário cadastrado.")
}

else {
let percHomens: number = (qtdMasc/totalFuncionarios) * 100

let percMulheres: number = (qtdFem/totalFuncionarios) * 100

alert("Total de salários pagos: R$ "+totalSalarios)
alert( "Maior salário: R$ "+maiorSalario)

alert("Funcionário: "+nomeMaiorSalario)
alert("Quantidade de homens: "+qtdMasc)
alert("Quantidade de mulheres: "+qtdFem)
alert("Percentual de homens: "+percHomens)
alert("Percentual de mulheres: "+percMulheres)
}
}

