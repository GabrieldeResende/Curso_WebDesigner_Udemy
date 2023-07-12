import {Carro} from "./Carro"
import { ConcessionariaInterface } from "./ConcessionariaInterface"
// ---------------- DADOS DA CONCESSIONARIA -------------------
export class Concessionaria implements ConcessionariaInterface {
    private endereco: string
    private listaDeCarros: Array<Carro>

    constructor(endereco: string, listaDeCarros: Array<Carro>) {
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }

    public fornecerEndereco():string {
        return this.endereco
    }

    public mostrarListaDeCarros(): Array<Carro> {
        return this.listaDeCarros
    }

    public fornecerHorarioDeFunciomaneto(): string {
        return "De Seg a Sex das 08H as 18H e sabado das 08H as 12H"
    }
}
