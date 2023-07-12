import { DaoInterface } from "./DaoInterface";
import { Moto } from "./Moto";

export class MotoDao {
    nomeTabela: string = "tb_Moto"

    inserir(object: Moto): boolean {
        console.log("logica de insert")
        return true
    }
    atualizar(object: Moto): boolean {
        console.log("logica update")
        return true
    }
    remover(id: number): Moto {
        console.log("logica delete")
        return new Moto("",)
    }
    selecionar(id: number): any {
        console.log("logica de selecionar")
        return new Moto("")
    }
    selecionarTodos(): [any] {
        console.log("logica all")
        return [new Moto("")]
    }
}