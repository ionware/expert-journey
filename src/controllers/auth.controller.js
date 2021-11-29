const registerValidator = require('@requests/validators/user');
const Hash = require('@utils/hash');
const JWT = require('@utils/jwt');
const routeWrapper = require('@utils/async');
const { createUser } = require('@services/user.service');

/**
 * Create a new login session
 */
const create = routeWrapper((req, res) => {
  // Needed: Hash compare, JWT, User
});

/**
 * Handles registeration request. (i.e create a new user).
 */
const store = routeWrapper(async (req, res) => {
  let user;
  try {
    user = await createUser({
      ...req.body,
      password: Hash.make(req.body.password),
    });
  } catch (error) {
    if (error.name === 'MongoServerError' && error.code === 11000)
      return res.status(400).json({
        errors: [{ details: 'Email already exists' }],
      });

    throw error;
  }

  const { id, name, email } = user;

  return res
    .status(200)
    .json({ id, name, email, token: JWT.sign({ id, email, name }) });
});

module.exports = {
  create,
  store: [registerValidator, store],
};
