'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //CRIAMOS UMA MIGRATION QUE FAZ UMA TABELA NO BANCO
   queryInterface.createTable("pedidos", {
     id: {
       type:Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true
     },
     client: {
       type:Sequelize.STRING,
       allowNull: false
     },
     part: {
       type:Sequelize.STRING,
       allowNull: false
     },
     amount: {
      type:Sequelize.STRING,
      allowNull: false
    },
     created_at: {
      type:Sequelize.DATE,
      allowNull: false
     },
     updated_at :{
      type:Sequelize.DATE,
      allowNull: false
     },
    
   })
  },

  down: async (queryInterface, Sequelize) => {

    //ISSO É PARA DESFAZER O QUE FOI FEITO
    queryInterface.dropTable("pedidos");
  }
};
