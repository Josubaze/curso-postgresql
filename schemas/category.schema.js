const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const price = Joi.number().integer().min(2)
const description = Joi.string();
const image = Joi.string().uri();

const createCategorySchema = Joi.object({
  name: name.required(),
  image: image.required(),
  price: price.required(),
});

const updateCategorySchema = Joi.object({
  name: name,
  image: image,
  price: price,
  description: description,
});

const getCategorySchema = Joi.object({
  id: id.required(),
});

module.exports = { createCategorySchema, updateCategorySchema, getCategorySchema }
