const router = require('express').Router();
const { create, store } = require('@controllers/auth.controller');

/**
 * This file is responsible for handling all the routes related to authentication
 * of users of the application.
 */

router.post('/login', create);

router.post('/register', store);

module.exports = router;
