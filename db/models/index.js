const { UserSchema, User } = require('./user.model');
const { ProductSchema, Product } = require('./product.model');
const { CustomerSchema, Customer } = require('./customer.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));

  Customer.associate(sequelize.models);
}

module.exports = setupModels;
