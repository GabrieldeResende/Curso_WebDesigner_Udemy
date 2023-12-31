import { DaoInterface } from "./DaoInterface"
import { Concessionaria } from "./Concessionaria"

export class ConcessionariaDao implements DaoInterface {


    nomeTabela: string = "tb_concessionaria"

    inserir(object: Concessionaria): boolean {
        console.log("logica de insert")
        return true
    }
    atualizar(object: Concessionaria): boolean {
        console.log("logica update")
        return true
    }
    remover(id: number): Concessionaria {
        console.log("logica delete")
        return new Concessionaria("",[])
    }
    selecionar(id: number): any {
        console.log("logica de selecionar")
        return new Concessionaria("",[])
    }
    selecionarTodos(): [any] {
        console.log("logica all")
        return [new Concessionaria("",[])]
    }
}