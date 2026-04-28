// 2. Crie um programa chamado Estações. Este programa deve ler uma data e armazenar na
// variável mês, um número entre 1 e 12, correspondendo a um dos meses do ano. No final,
// você deve imprimir uma mensagem conforme o exemplo: &quot;A estação do ano correspondente
// ao mês 3 é Verão&quot; Considere a estação prevalente para cada mês:
// a) Janeiro (1): Verão
// b) Fevereiro (2): Verão
// c) Março (3): Verão
// d) Abril (4): Outono
// e) Maio (5): Outono
// f) Junho (6): Outono
// g) Julho (7): Inverno
// h) Agosto (8): Inverno
// i) Setembro (9): Inverno
// j) Outubro (10): Primavera
// k) Novembro (11): Primavera
// l) Dezembro (12): Primavera


export function exercicio2Cond():void{

let numero = prompt("Informe um número para escolher a estação: ")
let estacao:number=Number(numero)

if(estacao==1){
    alert("A estação do ano correspondente ao mês Janeiro (1) é Verão")
}
else if(estacao==2){
    alert("A estação do ano correspondente ao mês Fevereiro (2) é Verão")
}
else if(estacao==3){
    alert("A estação do ano correspondente ao mês Março (3) é Verão")
}
else if(estacao==4){
    alert("A estação do ano correspondente ao mês Abril (4) é Outono")
}
else if(estacao==5){
    alert("A estação do ano correspondente ao mês Maio (5) é Outono")
}
else if(estacao==6){
    alert("A estação do ano correspondente ao mês Junho (6) é Outono")
}
else if(estacao==7){
    alert("A estação do ano correspondente ao mês Julho (7) é Inverno")
}
else if(estacao==8){
    alert("A estação do ano correspondente ao mês Agosto (8) é Inverno")
}
else if(estacao==9){
    alert("A estação do ano correspondente ao mês Setembro (9) é Inverno")
}
else if(estacao==10){
    alert("A estação do ano correspondente ao mês Setembro (10) é Primavera")
}
else if(estacao==11){
    alert("A estação do ano correspondente ao mês Setembro (11) é Primavera")
}
else if(estacao==12){
    alert("A estação do ano correspondente ao mês Setembro (12) é Primavera")
}

}