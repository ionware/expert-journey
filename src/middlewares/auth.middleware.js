/**
 * A simple authentication middleware to check if the user is authenticated or NOT.
 */
module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: 'You need to be authenticated' });
  }

  return next();
};
