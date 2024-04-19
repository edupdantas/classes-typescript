import Cliente from "./cliente";
import Corrente from "./corrente";
import Poupanca from "./poupanca";

export default function Aplicacao4(){

    const cli: Cliente = new Cliente("111","Eduardo","1212" , false);
    const conta_corrente: Corrente = new Corrente("02",cli,0);
    conta_corrente.depositar(1000);

    const cli2: Cliente = new Cliente("112","Kemelly","1213" , true);
    const conta_poupanca: Poupanca = new Poupanca("02",cli2);
    conta_poupanca.depositar(1000);
    conta_corrente.transferir(conta_poupanca,500)

}