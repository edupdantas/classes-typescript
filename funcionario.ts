import Pessoa from "./pessoa";
import Cargo from "./cargo";
import IUsuario from "./IUsuario"

export class Funcionario extends Pessoa implements IUsuario {
    cpf: string;
    nome: string;
    telefone: string;
    salario: number;
    cargo: Cargo[] = [];

    autenticar(): boolean {
        return true;
    }

    constructor(cpf: string, nome: string, telefone: string, salario: number) {
        super(cpf, nome, telefone);
        this.salario = salario;
    }

    addCargo(cargo: Cargo){
        this.cargo.push(cargo)
    }
}
