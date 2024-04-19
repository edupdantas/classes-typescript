import Cargo from "./cargo";
import Funcionario from "./funcionario";

export default function Aplicacao1(){
    const gerente: Cargo = new Cargo("Gerente");
    const atendente: Cargo = new Cargo("Atendente");
    const funcionarioGerente: Funcionario = new Funcionario("0001","tadeu","33344",3000,gerente);
    const funcionarioAtendente: Funcionario = new Funcionario("0002","jonas","22333",1500,atendente);
    console.log(funcionarioGerente.autenticar())
    console.log(funcionarioAtendente.autenticar())


}