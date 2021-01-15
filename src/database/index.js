const Sequelize = require("sequelize");
const dbConfig = require ("../config/database");

//imports dos models
const Pedido = require("../models/Pedidos");

const conexao = new Sequelize(dbConfig);

//inicializa os models
Pedido.init(conexao);

//inicializza os relacionamentos
Pedido.associate(conexao.models);