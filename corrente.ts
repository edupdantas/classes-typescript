import Conta from "./conta";
import Operacao from "./Operacao";
import Cliente from "./cliente";

export class Corrente extends Conta{
    creditos: Operacao[];
    debitos: Operacao[];
    numero: string;
    limite: number;
    cliente: Cliente;

    constructor(numero: string, cliente: Cliente, limite: number) {
        super(numero, cliente);
        this.limite = limite;
    }

    sacar(operacao: Operacao) {
        if(this.calcularSaldo()<operacao.valor){
            console.log("Impossível fazer esse saque!")
        }else{
            super.sacar(operacao);
        }
    }

    depositar(operacao: Operacao) {
        super.depositar(operacao);
    }

    transferir(destino: Conta,operacao: Operacao) {
        if(this.calcularSaldo()<operacao.valor){
            console.log("Impossível fazer essa transferencia!")
        }else{
            super.sacar(operacao);
            destino.depositar(operacao);
        }
    }

    calcularSaldo(): number {
        let sumCreditos: number;
        this.creditos.map(credito => {
            sumCreditos += credito.valor;
        })
        let sumDebitos: number;
        this.debitos.map(debito => {
            sumDebitos += debito.valor;
        })
        return (sumCreditos-sumDebitos)+this.limite;
    }

}
