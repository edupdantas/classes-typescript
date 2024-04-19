import Conta from "./conta";
import Operacao from "./Operacao";
import Cliente from "./cliente";
export default class Poupanca extends Conta {
    creditos: Operacao[];
    debitos: Operacao[];
    numero: string;
    cliente: Cliente;

    constructor(numero: string, cliente: Cliente) {
        super(numero, cliente);
    }

    sacar(valor: number) {
        if(this.calcularSaldo()<valor){
            console.log("Impossível fazer esse saque!")
        }else{
            super.sacar(valor);
        }
    }

    depositar(valor: number) {
        super.depositar(valor);
    }

    calcularSaldo(): number {
        let sumCreditos: number = 0;
        this.creditos.map(credito => {
            sumCreditos += credito.valor;
        })
        let sumDebitos: number = 0;
        this.debitos.map(debito => {
            sumDebitos += debito.valor;
        })
        return sumCreditos-sumDebitos;
    }

}
