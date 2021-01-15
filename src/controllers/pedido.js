let Pedidos = require("../models/Pedidos");

module.exports = {
   async listarPedidos(request, response ) {

    try {
        const pedidos = await Pedidos.findAll()

        response.send(pedidos)
    } catch (error) {
        console.log(error);
        response.status(500).send( {error})
    }
    
     },
    async adicionarPedidos  (request, response)  {
        //RECEBE OS DADOS DO BODY   
        const {client, part, amount, date} = request.body;
        //INCREMENTAR O ULTIMO ID  
            
        try {
            
            
            
             let pedido = await Pedidos.create({client, part, amount,date})

             response.status(201).send(pedido)
        } catch (error) {
            console.log(error)
            response.status(400).send({error})
        }

    },
    
    // DELETAR PEDIDO

    async deletarPedido (request, response)  {
        //RECUPERAR O ID DO PEDIDO 
    
        const pedidoId = request.params.id
    
        //RETIRAR O PEDIDO DA LISTA
    
        try {   
            let pedido = await Pedido.findByPk(pedidoId)

            if (!pedido)
                return response.status(404).send({erro: "Pedido não encontrado"})
                
            await pedido.destroy()
                response.status(201).send();
        } catch (error) {
            console.log(error);
            response.status(500).send({error})
            
        }
        //DEVOLVER RESPOSTA DE SUCESSO
       
    },
    
   async atualizarPedido (request, response)  {
    
        const pedidoId = request.params.id;
        const {part, amount} = request.body;
    
         try {

            let pedido = await Pedido.findByPk(pedidoId)

            if(!pedido)
                response.status(404).send("Pedido não encontrado")

            pedido.part = part;
            pedido.amount = amount;

            pedido.save();


            response.status(204).send();
         } catch (error) {
            response.status(500).send({error})
         }
    
         
    },

    async atualizarPedido (req, res) {
        //recupar o id do aluno 
        const pedidoId = req.params.id;
    
        //receber os dados do aluno
        const { cliente, produto} =  req.body;
    
        try {
            let pedido = await Pedidos.findByPk(pedidoId);
 
            if(!pedido)
                res.status(404).send({erro : "pedido não encontrado"});
 
                pedido.cliente = cliente;
                pedido.produto = produto;
 
                pedido.save();
                 //devolver a resposta de suceso
                res.status(200).send("alterado");
 
        } catch (error) {
            console.log(error);
            res.status(500).send({error})
        }
       
    
       
    },

    async listarPedidoId (request, response) {
        //encontrar o id do pedido
        const pedidoId = request.params.id   
        //buscar o pedido


        try {
            let pedido = await Pedido.findByPk(pedidoId, {
                attributes: ["id", "client", "part", "amount", "date"]
            });

            if(!pedido)
            return response.status(404).send({erro: "Pedido não encontrado"})
    
     //ESSE COMANDO SO FUNCIONA SE O PEDIDO FOR UM OBJETO SIMPLES, NÃO UM OBJETO
    
            response.send(pedido)            
            
        } catch (error) {
            console.log(error)
            response.status(500).send({error})

        }
       
    
    }
}