'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // N:M
      models.Pedido.belongsTo(models.Producto, {
        through: {
          model: "PedidoProducto",
          scope: {cantidad: 1}
        },
        foreignKey: "pedidoId"
      });

      models.Pedido.belongsTo(models.Cliente, {
        foreignKey: "clienteId"
      })
    }
  }
  Pedido.init({
    fecha_pedido: DataTypes.DATE,
    nro_factura: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    estado: DataTypes.INTEGER,
    clienteId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pedido',
  });
  return Pedido;
};