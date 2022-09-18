const bcrypt = require('bcrypt');

const comparePassword = async (password, hash) => {
  const isValid = await bcrypt.compare(password, hash);
  return {
    validated: isValid,
  }
}

const createHashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
}

module.exports = {
  comparePassword,
  createHashPassword,
} 