const { Model, DataTypes } = require("sequelize");

class Pedido extends Model {
    //aqui inicializamos os nossos campos da tabela
    static init(sequelize){
        super.init(
            {
                client: DataTypes.STRING,
                part: DataTypes.STRING,
                amount: DataTypes.STRING,
                date: DataTypes.STRING
            },
            {
                sequelize,
            }
        )
    }   
    /**
     * aqui configuramos os relacionamentos
     */
    static associate(models){

    }
}

module.exports = Pedido;