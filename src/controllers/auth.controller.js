const registerValidator = require('@requests/validators/user');
const Hash = require('@utils/hash');
const JWT = require('@utils/jwt');

/**
 * Create a new login session
 */
const create = (req, res) => {
  // Needed: Hash compare, JWT, User
};

/**
 * Handles registeration request. (i.e create a new user).
 */
const store = async (req, res) =>
  res.json({
    body: {
      ...req.body,
      password: Hash.make(req.body.password),
      token: JWT.sign(req.body),
    },
  });

module.exports = {
  create,
  store: [registerValidator, store],
};
