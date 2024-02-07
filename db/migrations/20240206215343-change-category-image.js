'use strict';

const { CATEGORY_TABLE } = require('./../models/category.model');
const { DataTypes} = require('sequelize');

module.exports = {
  async up (queryInterface) {
    await queryInterface.changeColumn( CATEGORY_TABLE, 'image', {
      allowNull: false,
      type: DataTypes.STRING,
    });
  },

  async down (queryInterface) {
    //await queryInterface.dropTable(CUSTOMER_TABLE);
  }
};

