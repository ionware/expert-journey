const Joi = require('joi');
const validator = require('@utils/joi-validator');

const rules = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(), // ensure email does not exists.
  password: Joi.string().required(),
});

module.exports = validator(rules);
