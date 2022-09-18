const mysql = require('mysql2/promise');
require('dotenv').config();

const getConnection = async () => {
  const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  };
  return mysql.createPool(dbConfig);
};


const DB_CREATE = `
CREATE DATABASE IF NOT EXISTS weather;
`;

const CREATE_TABLE = `
CREATE TABLE IF NOT EXISTS weather.user (
  id VARCHAR(50) NOT NULL UNIQUE,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL,
  PRIMARY KEY(id)
);
`;

const GET_USER = `
SELECT * FROM weather.user WHERE id = '20db4ab0-c100-4af8-afcd-3108b398431f'
`;

const SEED_DATA = `
INSERT INTO
  weather.user(id, name, email, password)
VALUES
  (
    '20db4ab0-c100-4af8-afcd-3108b398431f',
    'Márcio Daniel',
    'marcio.daniel@betrybe.com',
    'U2FsdGVkX1+hdnlO2gVlCXzhptUKmLSjN017jtM5PLs='
  )
`

const executeQueries = async () => {
  const connection = await getConnection();
  await connection.execute(DB_CREATE);
  try{
    const [result] = await connection.execute(GET_USER);
    if (result[0] === undefined) {
      await connection.execute(CREATE_TABLE);
      await connection.execute(SEED_DATA);
      console.log('**********************');
      console.log('---Database created---');
      console.log('**********************');
    }
    console.log('************************');
    console.log('Database already created');
    console.log('************************');
  } catch (error) {
    await connection.execute(CREATE_TABLE);
    await connection.execute(SEED_DATA);
    console.log('**********************');
    console.log('---Database created---');
    console.log('**********************');
  }
  connection.end();
  process.exit(0);
}
executeQueries();