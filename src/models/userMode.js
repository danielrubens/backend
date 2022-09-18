const getConnection = require('./connection');

const getUserByEmail = async (email) => {
  const connection = await getConnection();
  const query = 'SELECT * FROM weather.user WHERE email = ?';
  const[[result]] = await connection.execute(query, [email]);
  return result;
};

module.exports = {
  getUserByEmail,
};