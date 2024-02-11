const Joi = require('joi');

const id = Joi.number().integer();
const description = Joi.string().min(3).max(100);
const name = Joi.string().min(3).max(20);
const price = Joi.number().integer().min(20).max(1000);
const image = Joi.string().uri();
const categoryId = Joi.number().integer();
const offset = Joi.number().integer();
const limit = Joi.number().integer();
const minPrice = Joi.number().integer();
const maxPrice = Joi.number().integer();


const createProductSchema = Joi.object({
  description: description.required(),
  name: name.required(),
  price: price.required(),
  image: image.required(),
  categoryId: categoryId.required(),
});

const updateProductSchema = Joi.object({
  id: id,
  description: description,
  name: name,
  price: price,
  image: image,
  categoryId: categoryId,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

const queryProductSchema = Joi.object({
  limit, // es lo mismo que limit: limit,
  offset,
  price,
  minPrice,
  maxPrice: maxPrice.when('minPrice', {
    is: minPrice.required(),
    then: Joi.required(),
  })
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema, queryProductSchema }
