'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // N:1
      models.Producto.belongsTo(models.Categoria,{
        foreignKey: "categoriaId"
      })

      // N:M
      models.Producto.belongsTo(models.Pedido, {
        through: {
          model: "PedidoProducto",
          scope: {cantidad: 1}
        },
        foreignKey: "productoId"
      })
    }
  }
  Producto.init({
    nombre: DataTypes.STRING,
    precio: DataTypes.DECIMAL,
    stock: DataTypes.INTEGER,
    imagen: DataTypes.STRING,
    estado: DataTypes.BOOLEAN,
    descripcion: DataTypes.TEXT,
    categoriaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Producto',
  });
  return Producto;
};