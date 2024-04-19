import Cliente from "./cliente";
import Corrente from "./corrente";

export default function Aplicacao3(){

    const cli: Cliente = new Cliente("111","Eduardo","1212" , false);
    const conta_corrente: Corrente = new Corrente("01",cli,0);
    conta_corrente.depositar(100);
    conta_corrente.depositar(100);
    conta_corrente.depositar(100);
    conta_corrente.sacar(50);
    console.log(conta_corrente.calcularSaldo())

}