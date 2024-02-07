'use strict';

const { PRODUCT_TABLE } = require('./../models/product.model');
const { DataTypes } = require('sequelize');

module.exports = {
  async up (queryInterface) {
    await queryInterface.changeColumn( PRODUCT_TABLE, 'image', {
      allowNull: false,
      type: DataTypes.STRING,
    });
  },

  async down (queryInterface) {
    //await queryInterface.dropTable(CUSTOMER_TABLE);
  }
};

