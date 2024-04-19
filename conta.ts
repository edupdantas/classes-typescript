import Operacao from "./Operacao";
import Cliente from "./cliente";

export default abstract class Conta {
     numero: string;
     creditos: Operacao[] = [];
     debitos: Operacao[] = [];
     cliente: Cliente;

    constructor(numero: string, cliente: Cliente) {
        this.cliente = cliente;
        this.numero = numero;
    }

    depositar(valor: number) {
        this.creditos.push(new Operacao(valor))
    }

    sacar(valor: number) {
        this.debitos.push(new Operacao(valor))
    }


}