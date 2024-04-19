export default abstract class Pessoa {

    abstract cpf: string;

    abstract nome: string;

    abstract telefone: string;

    constructor(cpf: string, nome: string, telefone: string) {
        this.cpf = cpf;
        this.nome = nome;
        this.telefone = telefone;

    }

}