import Cliente from "./cliente";

export default function Aplicacao2(){

    const cli: Cliente = new Cliente("111","Eduardo","1212" , false);

    cli.adicionarEndereco("123","rua teste 1", "14", "ao lado 1", "cidade bacana 1", "pb");
    cli.adicionarEndereco("456","rua teste 2", "15", "ao lado 2", "cidade bacana 2", "rn");
    cli.adicionarEndereco("789","rua teste 3", "16", "ao lado 3", "cidade bacana 3", "ce");

    cli.listarEnderecos()

}