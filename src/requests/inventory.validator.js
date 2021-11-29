const Joi = require('joi');
const validator = require('@utils/joi-validator');

const createRules = Joi.object({
  name: Joi.string().required(),
  description: Joi.string(),
  quantity: Joi.number().required(),
  price: Joi.number().required(),
  image: Joi.string(),
  label: Joi.string(),
});

const updateRules = Joi.object({
  name: Joi.string(),
  description: Joi.string(),
  quantity: Joi.number(),
  price: Joi.number(),
  image: Joi.string(),
  label: Joi.string(),
});

module.exports = {
  create: validator(createRules),
  update: validator(updateRules),
};
