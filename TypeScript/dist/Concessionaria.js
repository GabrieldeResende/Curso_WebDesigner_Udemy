"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Concessionaria = void 0;
// ---------------- DADOS DA CONCESSIONARIA -------------------
class Concessionaria {
    constructor(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    fornecerEndereco() {
        return this.endereco;
    }
    mostrarListaDeCarros() {
        return this.listaDeCarros;
    }
    fornecerHorarioDeFunciomaneto() {
        return "De Seg a Sex das 08H as 18H e sabado das 08H as 12H";
    }
}
exports.Concessionaria = Concessionaria;
