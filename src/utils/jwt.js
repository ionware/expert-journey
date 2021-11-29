/* eslint-disable prefer-destructuring */
const jwt = require('jsonwebtoken');

const { APP_SECRET } = process.env;

module.exports = {
  sign: (payload) => jwt.sign(payload, APP_SECRET),
  verify: (token) => jwt.verify(token, APP_SECRET),

  /**
   * Express middleware to decode JWT token.
   */
  middleware: (req, res, next) => {
    let token = req.headers.authorization;
    if (!token || !token.startsWith('Bearer ')) {
      return next();
    }

    token = token.split(' ')[1];

    try {
      const decoded = jwt.verify(token, APP_SECRET);
      req.user = decoded;
      return next();
    } catch (err) {
      return next(err);
    }
  },
};
