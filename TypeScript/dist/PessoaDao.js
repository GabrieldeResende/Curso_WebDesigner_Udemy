"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaDao = void 0;
const Pessoa_1 = require("./Pessoa");
class PessoaDao {
    constructor() {
        this.nomeTabela = "tb_pessoa";
    }
    inserir(object) {
        console.log("logica de insert");
        return true;
    }
    atualizar(object) {
        console.log("logica update");
        return true;
    }
    remover(id) {
        console.log("logica delete");
        return new Pessoa_1.Pessoa("", "");
    }
    selecionar(id) {
        console.log("logica de selecionar");
        return new Pessoa_1.Pessoa("", "");
    }
    selecionarTodos() {
        console.log("logica all");
        return [new Pessoa_1.Pessoa("", "")];
    }
}
exports.PessoaDao = PessoaDao;
