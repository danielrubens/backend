const getConnection = require('./connection');

const sigIn = async (email) => {
  const query = 'SELECT * FROM weather.user WHERE email = ?';
  const connection = await getConnection();
  const result = await connection.execute(query, [email]);
  console.log(result);
  return result;
}

sigIn('marcio.daniel@msn.com');

module.exports = {
  sigIn,
};