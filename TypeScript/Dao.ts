import { DaoInterface } from "./DaoInterface";

export class Dao<T> implements DaoInterface<T> {
    nomeTabela: string = "tb_pessoa"

    inserir(object: T): boolean {
        console.log("logica de insert")
        return true
    }
    atualizar(object: T): boolean {
        console.log("logica update")
        return true
    }
    remover(id: number): T {
        console.log("logica delete")
        return Object()
    }
    selecionar(id: number): any {
        console.log("logica de selecionar")
        return Object()
    }
    selecionarTodos(): [any] {
        console.log("logica all")
        return [Object()]
    }
}