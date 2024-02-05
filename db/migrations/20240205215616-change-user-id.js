'use strict';

const { CUSTOMER_TABLE } = require('./../models/customer.model');
const { DataTypes} = require('sequelize');

module.exports = {
  async up (queryInterface) {
    await queryInterface.changeColumn( CUSTOMER_TABLE, 'userId', {
      field: 'user_id',
      allowNull: false,
      unique: true,
      type: DataTypes.INTEGER, //sin la referencia porque ya esta hecha en la anterior migracion
    });
  },

  async down (queryInterface) {
    //await queryInterface.dropTable(CUSTOMER_TABLE);
  }
};
