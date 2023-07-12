import { Veiculo } from "./Veiculo"
// --------------------- DADOS DO CARRO ---------------------
export class Carro extends Veiculo {
    private numeroDePortas:number

    constructor(modelo: string, numeroDePortas: any) {
        super(modelo)
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas
    }
}