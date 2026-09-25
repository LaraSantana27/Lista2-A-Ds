// 17. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Controle de Frequência do Refeitório do IFS
// O Refeitório do IFS deseja controlar o acesso de seus usuários. Todo usuário possui um identificador
// numérico interno e o nome completo. Os usuários dividem-se em Alunos (que possuem o curso) e
// Servidores (que possuem o departamento). O sistema deve pedir para o operador cadastrar os usuários
// que estão na fila. Cada vez que um usuário passa pela catraca, um método deve registrar essa presença
// em um histórico (array). Ao digitar um comando de encerramento, o programa exibe a listagem de quem
// almoçou no dia, mostrando mensagens personalizadas para cada tipo de usuário através de um método
// comum de identificação, além de exibir a quantidade total de acessos de alunos e servidores.

export function questãoPOO17(): void {

    abstract class Usuario {
        private _id: number
        private _nome: string

        constructor(id: number, nome: string) {
            this._id = id
            this._nome = nome
        }
        public get id(): number {
            return this._id
        }
        public set id(value: number) {
            this._id = value
        }
        public get nome(): string {
            return this._nome
        }
        public set nome(value: string) {
            this._nome = value
        }
        abstract identificar(): string

        exibirResumo(): string {
            return `ID: ${this.id}
            Nome: ${this.nome}
            ${this.identificar()}`
        }
    }

    class Aluno extends Usuario {
        private _curso: string

        constructor(id: number, nome: string, curso: string) {
            super(id, nome)
            this._curso = curso
        }
        public get curso(): string {
            return this._curso
        }
        public set curso(value: string) {
            this._curso = value
        }

        identificar(): string {
            return `Aluno ${this.nome} do curso de ${this.curso} almoçou hoje!`
        }
    }


    class Servidor extends Usuario {
        private _departamento: string

        constructor(id: number, nome: string, departamento: string) {
            super(id, nome)
            this._departamento = departamento
        }
        public get departamento(): string {
            return this._departamento
        }
        public set departamento(value: string) {
            this._departamento = value
        }

        identificar(): string {
            return `Servidor ${this.nome} do departamento de ${this.departamento} almoçou hoje!`
        }
    }

    let usuarios: Usuario[] = []
    let historico: Usuario[] = []

    let comando = Number(prompt("Digite 1- para cadastrar novo usuário,2- para registrar acesso ou 3- para finalizar:"))

    while (comando != 3) {
        if (comando == 1) {
            let tipo = String(prompt("Tipo de usuário: 1-Aluno | 2-Servidor"))
            let id = Number(prompt("Informe o identificador do usuário:"))
            let nome = String(prompt("Informe o nome completo:"))

            if (tipo === "1") {
                let curso = String(prompt("Informe o curso do aluno:"))

                usuarios.push(new Aluno(id, nome, curso))

            } 
            else if (tipo === "2") {
                let departamento = String(prompt("Informe o departamento do servidor:"))

                usuarios.push(new Servidor(id, nome, departamento))

            } 
            else {
                alert("Tipo inválido!")
            }
        } 
        else if (comando == 2) {
            let idBusca = Number(prompt("Informe o identificador do usuário que passou na catraca:"))
            let usuario: Usuario | undefined = undefined

            for (let i = 0; i < usuarios.length; i++) {
                if (usuarios[i].id === idBusca) {
                    usuario = usuarios[i]
                }
            }

            if (usuario) {
                historico.push(usuario)
                alert("Acesso registrado!")

            } else {
                alert("Usuário não encontrado!")
            }
        }


        comando = Number(prompt("Digite 1- para cadastrar novo usuário, 2- para registrar acesso ou 3- para finalizar:"))
    }

    let mensagens = "=== ALMOÇARAM HOJE ==="
    let totalAlunos = 0
    let totalServidores = 0

    for (let i = 0; i < historico.length; i++) {
        mensagens += historico[i].exibirResumo()

        if (historico[i] instanceof Aluno) {
            totalAlunos++
        } 
        else if (historico[i] instanceof Servidor) {
            totalServidores++
        }
    }
    alert(`${mensagens}
        Total de acessos de alunos: ${totalAlunos}
        Total de acessos de servidores: ${totalServidores}`)
}