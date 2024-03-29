const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().alphanum().min(3).max(30);
const lastName = Joi.string().alphanum().min(3).max(30);
const phone = Joi.string().regex(/^[0-9]{10}$/);
const userId = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(8);

const createCustomerSchema = Joi.object({
  id: id.required(),
  name: name.required(),
  lastName: lastName.required(),
  user: Joi.object({
    email: email.required(),
    password: password.required(),
  })
});

const updateCustomerSchema = Joi.object({
  name: name,
  lastName: lastName,
  phone: phone,
  userId: userId,
});

const getCustomerSchema = Joi.object({
  id: id.required(),
});

module.exports = { createCustomerSchema, updateCustomerSchema, getCustomerSchema }
