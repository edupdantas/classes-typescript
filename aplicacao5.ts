import Cliente from "./cliente";
import Corrente from "./corrente";

export default function Aplicacao5(){

    const cli: Cliente = new Cliente("111","Eduardo","1212" , false);
    const conta_corrente: Corrente = new Corrente("02",cli,100);
    conta_corrente.depositar(300);

    const cli2: Cliente = new Cliente("112","Kemelly","1213" , true);
    const conta_corrente_KemyLindinha: Corrente = new Corrente("02",cli2,0);
    conta_corrente_KemyLindinha.depositar(100);
    conta_corrente.transferir(conta_corrente_KemyLindinha,1000)
    console.log(conta_corrente.calcularSaldo());
    console.log(conta_corrente_KemyLindinha.calcularSaldo());

}