import Endereco from "./endereco";
import Pessoa from "./pessoa";
import IUsuario from "./IUsuario"
import Conta from "./conta";

export default class Cliente extends Pessoa implements IUsuario {
    cpf: string;
    nome: string;
    telefone: string;
    vip: boolean;
    enderecos: Endereco[] = [];

    constructor(cpf: string, nome: string, telefone: string, vip: boolean) {
        super(cpf, nome, telefone);
        this.vip = vip;
    }

    autenticar(): boolean {
        return true;
    }

    adicionarEndereco(cep: string, logradouro: string, numero: string, complemento: string, cidade: string, uf: string) {
        this.enderecos.push(new Endereco(cep, logradouro, numero, complemento, cidade, uf));
    }

    listarEnderecos(){
        this.enderecos.map((endereco,index) =>{
            console.log("Endereco " + (index+1) + ": " + endereco.toString())
        })
    }
}
