import Operacao from "./Operacao";
import Cliente from "./cliente";

export default abstract class Conta {
    abstract numero: string;
    abstract creditos: Operacao[] = [];
    abstract debitos: Operacao[] = [];
    abstract cliente: Cliente;

    constructor(numero: string, cliente: Cliente) {
        this.cliente = cliente;
        this.numero = numero;
    }

    depositar(operacao: Operacao) {
        this.creditos.push(operacao)
    }

    sacar(operacao: Operacao) {
        this.debitos.push(operacao)
    }


}