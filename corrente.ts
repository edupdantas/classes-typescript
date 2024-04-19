import Conta from "./conta";
import Operacao from "./Operacao";
import Cliente from "./cliente";

export default class Corrente extends Conta{
    creditos: Operacao[];
    debitos: Operacao[];
    numero: string;
    limite: number;
    cliente: Cliente;

    constructor(numero: string, cliente: Cliente, limite: number) {
        super(numero, cliente);
        this.limite = limite;
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

    transferir(destino: Conta,valor: number) {
        if(this.calcularSaldo()<valor){
            console.log("Impossível fazer essa transferencia!")
        }else{
            super.sacar(valor);
            destino.depositar(valor);
        }
    }

    calcularSaldo(): number {
        var sumCreditos: number = 0;
        this.creditos.map(credito => {
            sumCreditos = sumCreditos + credito.valor;
        })
        let sumDebitos: number = 0;
        this.debitos.map(debito => {
            sumDebitos = sumDebitos + debito.valor;
        })
        return ((sumCreditos-sumDebitos)+this.limite);
    }

}
