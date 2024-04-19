import Conta from "./conta";
import Operacao from "./Operacao";
import Cliente from "./cliente";
export class Poupanca extends Conta {
    creditos: Operacao[];
    debitos: Operacao[];
    numero: string;
    cliente: Cliente;

    constructor(numero: string, cliente: Cliente) {
        super(numero, cliente);
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

    calcularSaldo(): number {
        let sumCreditos: number;
        this.creditos.map(credito => {
            sumCreditos += credito.valor;
        })
        let sumDebitos: number;
        this.debitos.map(debito => {
            sumDebitos += debito.valor;
        })
        return sumCreditos-sumDebitos;
    }

}
