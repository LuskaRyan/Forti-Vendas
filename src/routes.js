const express = require("express");

const pedidoController = require("./controllers/pedido");

const routes = express.Router();

//configuraçao de rota
routes.get("/pedidos", pedidoController.listarPedidos);

routes.get("/pedidos/:id", pedidoController.listarPedidoId);

routes.post("/pedidos", pedidoController.adicionarPedidos);

routes.delete("pedidos/:id", pedidoController.deletarPedido);

routes.put("/pedidos/:id", pedidoController.atualizarPedido);

module.exports = routes;