module.exports = (routeHandler) => async (req, res, next) => {
  try {
    await routeHandler(req, res, next);
  } catch (err) {
    return next(err);
  }
};
