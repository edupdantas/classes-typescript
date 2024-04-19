export default abstract class Operacao {

    abstract valor: number;

    abstract data: Date = new Date();

    constructor(valor: number) {
        this.valor = valor;
    }

}