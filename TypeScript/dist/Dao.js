"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dao = void 0;
class Dao {
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
        return Object();
    }
    selecionar(id) {
        console.log("logica de selecionar");
        return Object();
    }
    selecionarTodos() {
        console.log("logica all");
        return [Object()];
    }
}
exports.Dao = Dao;
