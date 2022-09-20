const getConnection = require('./connection');

const sigIn = async (email) => {
  const query = 'SELECT * FROM weather.user WHERE email = ?';
  const connection = await getConnection();
  const [[result]] = await connection.execute(query, [email]);
  return result;
};

const signup = async ({ id, name, email, password }) => {
    const connection = await getConnection();
    const query = 'INSERT INTO weather.user (id, name, email, password) VALUES (?, ?, ?, ?)';
    const [result] = await connection.execute(query, [id, name, email, password]);
    if (result.affectedRows === 1) {
      return {
        id,
        name,
        email,
      };
    }
    return null;
};

module.exports = {
  sigIn,
  signup,
};