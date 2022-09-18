const jwt = require('jsonwebtoken');

const generateToken = ({id, name}) => {
  const options = {
    expiresIn: '14d',
    algorithm: 'HS256',
  }
  const token = jwt.sign({id, name}, process.env.JWT_SECRET, options);

  return token;
};

const validateToken = (token) => {
  try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return {
      payload: decoded,
      validated: true,
    }
  } catch (error) {
    return {
      payload: null,
      validated: false,
    }
  }
}

module.exports = {
  generateToken,
  validateToken,
};