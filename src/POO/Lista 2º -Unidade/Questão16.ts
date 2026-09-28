// 16. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Um zoológico possui mamíferos e aves. Ambos têm nome, espécie, idade e sexo, todos privados.
// Mamíferos têm tipo de alimentação; aves têm se são migratórias ou não. Cada animal tem um
// comportamento de ‘emitir som’ e ‘mover’ diferente. O sistema deve cadastrar animais, listar por tipo
// (Mamíferos ou Aves) e simular a "hora da alimentação" chamando o método de som de cada um.

export function questãoPOO16(): void {

    abstract class Animal {
        private _nome: string
        private _especie: string
        private _idade: number
        private _sexo: string

        constructor(nome: string, especie: string, idade: number, sexo: string) {
            this._nome = nome
            this._especie = especie
            this._idade = idade
            this._sexo = sexo
        }

        public get nome(): string {
            return this._nome
        }

        public set nome(value: string) {
            this._nome = value
        }

        public get especie(): string {
            return this._especie
        }

        public set especie(value: string) {
            this._especie = value
        }

        public get idade(): number {
            return this._idade
        }

        public set idade(value: number) {
            this._idade = value
        }

        public get sexo(): string {
            return this._sexo
        }

        public set sexo(value: string) {
            this._sexo = value
        }

        abstract emitirSom(): void

        abstract mover(): void
    }

    class Aves extends Animal {
        private _migracao: boolean

        constructor(migracao: boolean, nome: string, especie: string, idade: number, sexo: string){
            super(nome, especie, idade, sexo)
            this._migracao = migracao
        }
        public get migracao(): boolean {
            return this._migracao
        }
        public set migracao(value: boolean) {
            this._migracao = value
        }
        public emitirSom(): void {
            console.log(`A ave ${this.nome} faz Pô Pô Pô Pô`)
        }
        public mover(): void {
            console.log(`A ave ${this.nome} voa`)
        }
    }

    class Mamiferos extends Animal {
        private _tipoAlimentacao: string

        constructor(nome: string, especie: string, idade: number, sexo: string, tipoAlimentacao: string){
            super(nome, especie, idade, sexo)
            this._tipoAlimentacao = tipoAlimentacao
        }
        public get tipoAlimentacao(): string {
            return this._tipoAlimentacao
        }
        public set tipoAlimentacao(value: string) {
            this._tipoAlimentacao = value
        }
        public emitirSom(): void {
            console.log(`O mamífero ${this.nome} late`)
        }
        public mover(): void {
            console.log(`O mamífero ${this.nome} corre`)
        }
    }

    let animais: Animal[] = []

    let resposta = String(prompt("Deseja cadastrar um animal? Digite: (s) Sim | (n) Não")).toLowerCase()
    while (resposta === "s") {
        let tipo = Number(prompt("Insira o tipo de animal: (1) Mamífero | (2) Ave"))
        let nome = String(prompt("Insira o nome do animal: "))
        let especie = String(prompt("Insira a espécie: "))
        let idade = Number(prompt("Insira a idade: "))
        let sexo = String(prompt("Informe o sexo: "))

        if (tipo == 1) {
            let tipoAlimentacao = String(prompt("Insira o tipo de alimentação: "))

            let novoMamifero = new Mamiferos(nome, especie, idade, sexo, tipoAlimentacao)
            animais.push(novoMamifero)

        }
        else if (tipo == 2) {
            let migratoria = String(prompt("O animal é migratório? (s/n): ")).toLowerCase() === "s"
            
            let novaAve = new Aves(migratoria, nome, especie, idade, sexo)
            animais.push(novaAve)

        } 
        else {
            console.log("Tipo de animal inválido!")
        }

        resposta = String(prompt("Deseja cadastrar outro animal? (s/n): ")).toLowerCase()
    }
    console.log("Hora da alimentação:")
    for (let animal of animais) {
        animal.emitirSom()
    }
}
