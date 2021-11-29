const Joi = require('joi');

module.exports =
  (rules = Joi.object({})) =>
  (req, res, next) => {
    const { error, value } = rules.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.reduce(
        (all, error) => [...all, { details: error.message }],
        []
      );

      return res.status(400).json({
        status: 'failed',
        errors,
      });
    }
    // set the body to validated values
    req.body = value;

    return next();
  };
