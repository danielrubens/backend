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
SELECT * FROM weather.user WHERE id = '7a67f801-0af4-4632-b642-f5e0e44d8dba'
`;

const SEED_DATA = `
INSERT INTO
  weather.user(id, name, email, password)
VALUES
  (
    '7a67f801-0af4-4632-b642-f5e0e44d8dba',
    'Márcio Daniel',
    'marcio.daniel@betrybe.com',
    '$2b$10$AwdqKMYBWNR20dMQD4gqN.8/3qVkNQczunybgykv/svvrUOGuxoIa'
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