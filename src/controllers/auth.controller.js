const registerValidator = require('@requests/validators/user');
const Hash = require('@utils/hash');
const JWT = require('@utils/jwt');
const routeWrapper = require('@utils/async');
const { createUser, getUserByEmail } = require('@services/user.service');

/**
 * Create a new login session
 */
const create = routeWrapper(async (req, res) => {
  const { email, password } = req.body;
  const errorResponse = {
    errors: [{ details: 'Email or password was incorrect' }],
    message: 'Email or password is incorrect',
  };

  if (!email || !password) return res.status(400).json(errorResponse);

  // fetch the user from database
  const user = await getUserByEmail(email);

  if (!user) return res.status(400).json(errorResponse);
  // verify the password is correct
  if (!Hash.check(password, user.password))
    return res.status(400).json(errorResponse);

  return res.status(200).json({
    token: JWT.sign({ id: user.id, email: user.email, name: user.name }),
    email: user.email,
    name: user.name,
    id: user.id,
  });
});

/**
 * Handles registeration request. (i.e create a new user).
 */
const store = routeWrapper(async (req, res) => {
  let user;
  try {
    user = await createUser({
      ...req.body,
      // hash the password
      password: Hash.make(req.body.password),
    });
  } catch (error) {
    // check for mongoDB specific unique error (email:unique)
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
