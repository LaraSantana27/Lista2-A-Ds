// 7. Lista de Presença
// 1. Crie um array chamado presenca que aceite apenas strings.
// 2. Adicione 5 nomes de alunos.
// 3. Tente adicionar um número e observe o erro do compilador.
// 4. Use um loop para imprimir cada nome em letras maiúsculas.

export function exercicioList7():void{

let presenca=["lara","wendra","Izabelle","arthur","maisa"]

for(let nome of presenca){
    console.log(nome.toLocaleUpperCase())
}
}