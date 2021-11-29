const bcrypt = require('bcrypt');

/**
 * Generate a hash from a password.
 *
 * @param {string} password
 * @param {Number} saltRound
 * @returns string
 */
const make = (password, saltRound = 10) => bcrypt.hashSync(password, saltRound);

/**
 * Compare plain password with a hash to see if they matches.
 *
 * @param {string} password
 * @param {string} hash
 * @returns bool
 */
const check = (password, hash) => bcrypt.compareSync(password, hash);

module.exports = {
  make,
  check,
};
