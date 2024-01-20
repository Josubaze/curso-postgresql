const Joi = require('joi');

const id = Joi.number().integer();
const description = Joi.string().min(3).max(15);
const stock = Joi.number().integer().min(1);
const price = Joi.number().integer().min(20).max(1000);

const createProductSchema = Joi.object({
  description: description.required(),
  stock: stock.required(),
  price: price.required()
});

const updateProductSchema = Joi.object({
  description: description,
  stock: stock,
  price: price
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema }
