const { Sequelize } = require('sequelize');

const  { config }  = require('./../config/config');
const  setupModels  = require('./../db/models');

const options = {
  dialect: 'postgres',
  logging:  config.isProd ? false : true,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // Para evitar errores de autorización en entornos de desarrollo, considera establecerlo en true en producción.
    }
  }
}


const sequelize = new Sequelize(config.dbUrl, options);

setupModels(sequelize);

module.exports = sequelize;
