const getConnection = require('./connection');

const sigIn = async (email) => {
  const query = 'SELECT * FROM weather.user WHERE email = ?';
  const connection = await getConnection();
  const[[result]] = await connection.execute(query, [email]);
  return result;
}

const sigUp = async (id, name, email, password) => {
  const query = 'INSERT INTO weather.user (id, name, email, password) VALUES (?, ?, ?, ?)';
  const connection = await getConnection();
  const [result] = await connection.execute(query, [id, name, email, password]);
  return {
    id: result.insertId,
  }
}

module.exports = {
  sigIn,
  sigUp,
};