"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MotoDao = void 0;
const Moto_1 = require("./Moto");
class MotoDao {
    constructor() {
        this.nomeTabela = "tb_Moto";
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
        return new Moto_1.Moto("");
    }
    selecionar(id) {
        console.log("logica de selecionar");
        return new Moto_1.Moto("");
    }
    selecionarTodos() {
        console.log("logica all");
        return [new Moto_1.Moto("")];
    }
}
exports.MotoDao = MotoDao;
