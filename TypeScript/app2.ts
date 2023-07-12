import { Carro } from "./Carro"
import { Pessoa } from "./Pessoa"
import { Concessionaria } from "./Concessionaria"

// ------- CRIAR CARRO -------

let carroA = new Carro("Dodge", 4)
let carroB = new Carro("Veloster", 3)
let carroC = new Carro("Siena", 2)

// ------- montar lista de carros -------

let listaDeCarros: Array<Carro> = [carroA, carroB, carroC]

let concessionaria = new Concessionaria("SIA", listaDeCarros)

// ------exibir lista de carros ---------
// console.log(concessionaria.mostrarListaDeCarros())

// ------- comprar carro --------
let cliente = new Pessoa("Gabriel", "Veloster")
console.log(cliente.dizerCarroPreferido())

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    if(carro["modelo"] == cliente.dizerCarroPreferido()) {

        // ----comprar carro----
        cliente.comprarCarro(carro)
    }
})

console.log(cliente.dizerCarroPreferido())