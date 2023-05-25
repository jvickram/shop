const jwt = require("jsonwebtoken");
const path = require('path');
require("dotenv").config({ path: path.resolve(__dirname, './.env') });

module.exports.createJwtSecretToken = (user) => {
  return jwt.sign(user, process.env.TOKEN_KEY, {
    expiresIn: 60*60,
  });
};