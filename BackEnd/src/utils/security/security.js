const bcrypt = require("bcrypt");

function generateHash(input) {
  return bcrypt.hashSync(input, 10);
}

function compareInputToHash(input, hash) {
  return bcrypt.compareSync(input, hash);
}

module.exports = { generateHash, compareInputToHash };
