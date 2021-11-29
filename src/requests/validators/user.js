const Joi = require('joi');
const validator = require('@utils/joi-validator');

const rules = Joi.object({
  name: Joi.string().required(),
  // TODO: ensure email is unique on request.
  email: Joi.string().email().required(), // ensure email does not exists.
  password: Joi.string().required(),
});

module.exports = validator(rules);
