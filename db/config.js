const  { config }  = require('./../config/config');

module.exports = {
  development: {
    url: config.dbUrl,
    dialect:  'postgres',
    dialectOptions: { // debido a que se esta usando dbUrl y no URI, es decir BDD external
      ssl: {
        require: true,
        rejectUnauthorized: false // Para evitar errores de autorización en entornos de desarrollo, considera establecerlo en true en producción.
      }
    }
  },
  production: {
    url: config.dbUrl,
    dialect:  'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false // Para evitar errores de autorización en entornos de desarrollo, considera establecerlo en true en producción.
      }
    }
  }
}
