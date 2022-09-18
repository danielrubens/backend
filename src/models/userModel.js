const getConnection = require('./connection');

const getUserByEmail = async (email) => {
  const connection = await getConnection();
  try{ 
  const query = 'SELECT * FROM weather.user WHERE email = ?';
  const[[result]] = await connection.execute(query, [email]);
  if( result === undefined) return null;
  return result} 
  catch (err) {
    console.log(err.stack);
    const error = new Error('Internal server error');
    connection.end();
    throw error;
  }
};

module.exports = {
  getUserByEmail,
};