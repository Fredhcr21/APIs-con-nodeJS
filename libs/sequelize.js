const { Sequelize } = require('sequelize');

const { config } = require('../config/config');
const setupmModels = require('../models/index');


const USER = encodeURIComponent(config.dbUSER);
const PASSWORD = encodeURIComponent(config.dbPASSWORD);
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHOST}:${config.dbPORT}/${config.dbNAME}`;
console.log(URI);


const sequelize = new Sequelize(URI, {
  dialect: 'mysql',
  logging: true,

});

setupmModels(sequelize);

sequelize.sync();


module.exports = sequelize;
