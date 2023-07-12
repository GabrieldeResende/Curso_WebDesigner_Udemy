"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { ConcessionariaDao } from "./ConcessionariaDao";
const Concessionaria_1 = require("./Concessionaria");
// import { PessoaDao } from "./PessoaDao";
const Pessoa_1 = require("./Pessoa");
// import { CarroDao } from "./CarroDao";
const Carro_1 = require("./Carro");
const Moto_1 = require("./Moto");
// import { MotoDao } from "./MotoDao";
const Dao_1 = require("./Dao");
// let dao: ConcessionariaDao =  new ConcessionariaDao()
let concessionaria = new Concessionaria_1.Concessionaria("", []);
// let dao2: PessoaDao = new PessoaDao()
let pessoa = new Pessoa_1.Pessoa("", "");
// let dao3: CarroDao = new CarroDao()
let carro = new Carro_1.Carro("", "");
// let dao4: MotoDao = new MotoDao()
let moto = new Moto_1.Moto("");
let dao3 = new Dao_1.Dao();
let dao4 = new Dao_1.Dao();
dao3.inserir(concessionaria);
dao4.remover(5);
