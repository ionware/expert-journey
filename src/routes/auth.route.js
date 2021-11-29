const router = require('express').Router();

/**
 * This file is responsible for handling all the routes related to authentication
 * of users of the application.
 */

router.get('/login', (req, res) =>
  res.json({
    message: 'Welcome to the authentication route.',
  })
);

module.exports = router;
