"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Carro_1 = require("./Carro");
const Pessoa_1 = require("./Pessoa");
const Concessionaria_1 = require("./Concessionaria");
// ------- CRIAR CARRO -------
let carroA = new Carro_1.Carro("Dodge", 4);
let carroB = new Carro_1.Carro("Veloster", 3);
let carroC = new Carro_1.Carro("Siena", 2);
// ------- montar lista de carros -------
let listaDeCarros = [carroA, carroB, carroC];
let concessionaria = new Concessionaria_1.Concessionaria("SIA", listaDeCarros);
// ------exibir lista de carros ---------
// console.log(concessionaria.mostrarListaDeCarros())
// ------- comprar carro --------
let cliente = new Pessoa_1.Pessoa("Gabriel", "Veloster");
console.log(cliente.dizerCarroPreferido());
concessionaria.mostrarListaDeCarros().map((carro) => {
    if (carro["modelo"] == cliente.dizerCarroPreferido()) {
        // ----comprar carro----
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroPreferido());
