"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarroDao = void 0;
const Carro_1 = require("./Carro");
class CarroDao {
    constructor() {
        this.nomeTabela = "tb_carro";
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
        return new Carro_1.Carro("", 2);
    }
    selecionar(id) {
        console.log("logica de selecionar");
        return new Carro_1.Carro("", 2);
    }
    selecionarTodos() {
        console.log("logica all");
        return [new Carro_1.Carro("", 2)];
    }
}
exports.CarroDao = CarroDao;
