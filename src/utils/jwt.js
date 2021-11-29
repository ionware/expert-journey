const jwt = require('jsonwebtoken');

const { APP_SECRET } = process.env;

module.exports = {
  sign: (payload) => jwt.sign(payload, APP_SECRET),
  verify: (token) => jwt.verify(token, APP_SECRET),
};
