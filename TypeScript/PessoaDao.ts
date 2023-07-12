import { DaoInterface } from "./DaoInterface"
import { Pessoa } from "./Pessoa"

export class PessoaDao implements DaoInterface<T> {


    nomeTabela: string = "tb_pessoa"

    inserir(object: Pessoa): boolean {
        console.log("logica de insert")
        return true
    }
    atualizar(object: Pessoa): boolean {
        console.log("logica update")
        return true
    }
    remover(id: number): Pessoa {
        console.log("logica delete")
        return new Pessoa("","",)
    }
    selecionar(id: number): any {
        console.log("logica de selecionar")
        return new Pessoa("","")
    }
    selecionarTodos(): [any] {
        console.log("logica all")
        return [new Pessoa("","")]
    }
}