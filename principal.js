"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cliente_1 = require("./cliente");
var endereco_1 = require("./endereco");
var pessoa_1 = require("./pessoa");
var pessoa = new pessoa_1.Pessoa();
pessoa.nome = "Victor Vidigal Ribeiro";
pessoa.idade = 36;
console.log(pessoa.nome);
console.log(pessoa.idade);
var endereco = new endereco_1.Endereco();
endereco.cep = '36030-140';
var cliente = new cliente_1.Cliente();
cliente.nome = "João";
cliente.endereco = endereco;
