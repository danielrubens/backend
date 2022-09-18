const { v4: uuidv4 } = require('uuid');

const createId = () => uuidv4();

module.exports = createId;