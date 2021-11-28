const { Sequelize } = require("sequelize");


const { config } = require('../config/config');
const setupmModels = require('../models/index');


const USER = encodeURIComponent(config.dbUSER);
const PASSWORD = encodeURIComponent(config.dbPASSWORD);
const URI = `sqlite://${USER}:${PASSWORD}@${config.dbHOST}:${config.dbPORT}/${config.dbNAME}`;

const sequelize = new Sequelize(URI, {
  dialect: 'sqlite',
  storage: 'path/to/database.sqlite',
  logging: false
});

setupmModels(sequelize);

sequelize.sync();


module.exports = sequelize;
