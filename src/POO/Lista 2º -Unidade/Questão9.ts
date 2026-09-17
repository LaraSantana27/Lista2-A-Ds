// 9. Uma loja deseja controlar seu estoque de produtos. O sistema deve pedir ao usuário o nome do
// produto, o preço e a quantidade em estoque. Cada produto deve ser representado por um objeto. Crie
// um método que calcule o valor total em estoque (preço × quantidade) e exiba essa informação para
// cada produto.

export function questãoPOO9():void{

class Estoque{
    nomeProduto:string
    preco:number
    quantidade:number

    constructor(nomeProduto:string, preco:number, quantidade:number){
        this.nomeProduto=nomeProduto
        this.preco=preco
        this.quantidade=quantidade
    }

    totalEstoque(){
        let valorTotal=this.preco*this.quantidade
        return valorTotal
    }
    exibirResumo():void{
        alert(`ESTOQUE:
    Nome do Produto: ${this.nomeProduto}
    Preço: ${this.preco}
    Quantidade: ${this.quantidade}
    Valor Total: ${this.totalEstoque()}`)
    }
}

let nome=String(prompt("Informe o nome do produto: "))
let preco=Number(prompt("Informe o preço do produto: "))
let quantidade=Number(prompt("Informe a quantidade no estoque: "))

let valorEstoque:Estoque = new Estoque(nome,preco,quantidade)
valorEstoque.exibirResumo()
}
