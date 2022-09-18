const mysql = require('mysql2/promise');

let connection = null;

const getConnection = async () => {
  if (connection !== null) return connection;
  const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  };
  connection = mysql.createPool(dbConfig);
  return connection;
};

module.exports = getConnection;