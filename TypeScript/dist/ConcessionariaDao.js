"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcessionariaDao = void 0;
const Concessionaria_1 = require("./Concessionaria");
class ConcessionariaDao {
    constructor() {
        this.nomeTabela = "tb_concessionaria";
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
        return new Concessionaria_1.Concessionaria("", []);
    }
    selecionar(id) {
        console.log("logica de selecionar");
        return new Concessionaria_1.Concessionaria("", []);
    }
    selecionarTodos() {
        console.log("logica all");
        return [new Concessionaria_1.Concessionaria("", [])];
    }
}
exports.ConcessionariaDao = ConcessionariaDao;
