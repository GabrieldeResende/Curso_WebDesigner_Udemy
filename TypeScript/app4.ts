// import { ConcessionariaDao } from "./ConcessionariaDao";
import { Concessionaria } from "./Concessionaria";
// import { PessoaDao } from "./PessoaDao";
import { Pessoa } from "./Pessoa";
// import { CarroDao } from "./CarroDao";
import { Carro } from "./Carro";
import { Moto } from "./Moto";
// import { MotoDao } from "./MotoDao";
import { Dao } from "./Dao";

// let dao: ConcessionariaDao =  new ConcessionariaDao()
let concessionaria = new Concessionaria("", [])


// let dao2: PessoaDao = new PessoaDao()
let pessoa: Pessoa = new Pessoa("","")

// let dao3: CarroDao = new CarroDao()
let carro: Carro = new Carro("","")

// let dao4: MotoDao = new MotoDao()
let moto: Moto = new Moto("")

let dao3: Dao<Concessionaria> = new Dao<Concessionaria>()
let dao4: Dao<Pessoa> = new Dao<Pessoa>()
dao3.inserir(concessionaria)
dao4.remover(5)
