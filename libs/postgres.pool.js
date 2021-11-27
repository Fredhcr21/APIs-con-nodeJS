const { Pool } = require('pg');

const { config } = require('../config/config');

const USER = encodeURIComponent(config.dbUSER);
const PASSWORD = encodeURIComponent(config.dbPASSWORD);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHOST}:${config.dbPORT}/${config.dbNAME}`;
const pool = new Pool({ connectionString: URI });

module.exports = pool;
