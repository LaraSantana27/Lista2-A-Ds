// 5. Analisador de Desempenho de Vendas (Relatório de Equipe)
// Imagine que você está gerindo uma equipe de 5 vendedores.
//  Função classificarVenda(valor):
// o Se valor &lt; 1000: Retorna &quot;Bronze&quot;
// o Se valor entre 1000 e 5000: Retorna &quot;Prata&quot;
// o Se valor &gt; 5000: Retorna &quot;Ouro&quot;
//  O Programa:
// 1. Use um laço for para pedir o valor da venda de cada um dos 5 vendedores.
// 2. Dentro do laço, chame a função de classificação.
// 3. Ao final, o programa deve exibir:
//  O total de vendas da equipe (soma).
//  Quem foi o vendedor com a maior venda (maior valor digitado).
//  Quantos vendedores atingiram a categoria &quot;Ouro&quot;.

export function exercicio5Rep():void{

function classificarVenda(valor:any){
    if(valor<1000){
        alert("Bronze")
    }
    else if(valor >= 1000 && valor <= 5000){
        alert("Prata")
    } 
    else{
        alert("Ouro")
        qntOuro++
    }
}
let totalVendas=0
let vendedorMaior=0
let qntOuro=0

for(let i=0;i<5;i++){
    let vendas=Number(prompt("Informe o seu total de vendas: "))
    totalVendas+=vendas
    classificarVenda(vendas)

    if(vendas>vendedorMaior){
        vendedorMaior=vendas
    }

}
alert("Quantidade de vendas: "+totalVendas)
alert("Maior digitado: "+vendedorMaior)
alert("Quantidade de vendedores que atingiram Ouro: "+qntOuro)
}