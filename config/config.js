require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 2121,
  dbUSER: process.env.DB_USER,
  dbPASSWORD: process.env.DB_PASSWORD,
  dbHOST: process.env.DB_HOST,
  dbNAME: process.env .DB_NAME,
  dbPORT: process.env.DB_PORT,
}

module.exports = { config };
