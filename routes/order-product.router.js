const express = require('express');

const OrderProductService = require('./../services/order-product.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createOrderProductSchema, updateOrderProductSchema, getOrderProductSchema } = require('./../schemas/order-product.schema');

const router = express.Router();
const service = new OrderProductService();

router.get('/', async (req, res, next) => {
  try {
    const ordersProducts = await service.find();
    res.json(ordersProducts);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getOrderProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const orderProduct = await service.findOne(id);
      res.json(orderProduct);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createOrderProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newOrderProduct = await service.create(body);
      res.status(201).json(newOrderProduct);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getOrderProductSchema, 'params'),
  validatorHandler(updateOrderProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const orderProduct = await service.update(id, body);
      res.json(orderProduct);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getOrderProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
