import { DaoInterface } from "./DaoInterface";
import { Carro } from "./Carro";

export class CarroDao {
    nomeTabela: string = "tb_carro"

    inserir(object: Carro): boolean {
        console.log("logica de insert")
        return true
    }
    atualizar(object: Carro): boolean {
        console.log("logica update")
        return true
    }
    remover(id: number): Carro {
        console.log("logica delete")
        return new Carro("",2)
    }
    selecionar(id: number): any {
        console.log("logica de selecionar")
        return new Carro("",2)
    }
    selecionarTodos(): [any] {
        console.log("logica all")
        return [new Carro("",2)]
    }
}