const { faker } = require('@faker-js/faker');
const { Op } = require('sequelize');
const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize'); // ya trae en su interior el pooling

class ProductsService {

  constructor(){
    //this.products = [];
    //this.generate(); // no ejecutamos pool ya esta integrado en sequelize
  }

  generate() {
    //
  }

  async create(data) {
    const newProduct = await models.Product.create(data);
    return newProduct;
  }

  async find(query) {
    const options = {
      include: ['category'],
      where: {}
    };
    const { limit, offset } = query;
    if( limit && offset ){
      options.limit = limit;
      options.offset = offset;
    }

    const { price } = query;
    if( price ){
      options.where.price = price;
    }

    const { minPrice, maxPrice } = query;
    if( minPrice && maxPrice ){
      options.where.price = {
        [Op.gte ]: minPrice,
        [Op.lte ]: maxPrice
      };
    }

    const rta = await models.Product.findAll(options);
    return rta ;
  }

  async findOne(id) {
    const product = await models.Product.findByPk(id);
    if(!product){
      throw boom.notFound('Product not found');
    }
    return product;
  }

  async update(id, changes) {
    const product = await this.findOne(id);
    const rta = await product.update(changes);
    return rta;
  }

  async delete(id) {
    const product = await this.findOne(id);
    await product.destroy()
    return { id };
  }

}

module.exports = ProductsService;
