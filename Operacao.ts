export default class Operacao {

     valor: number;

     data: Date = new Date();

    constructor(valor: number) {
        this.valor = valor;
        this.data = new Date();
    }

}