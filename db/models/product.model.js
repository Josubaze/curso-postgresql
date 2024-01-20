
const { Model, DataTypes, Sequelize } = require('sequelize');

const PRODUCT_TABLE = 'products';

const ProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  stock: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  price: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
}

class Product extends Model {
  static associate(){
    // asocciate
  }
  static config(sequelize){
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'Product',
      timestamps: false,
    }
  }
}

module.exports = { PRODUCT_TABLE, ProductSchema, Product };
