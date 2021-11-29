const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const routeList = require('@routes');
const jwt = require('@utils/jwt');

// register all database model.
require('@models');

const app = express(); // intialize express app.

// setup middlewares.
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(jwt.middleware);

// test endpoint.
app.get('/', (req, res) => res.status(200).json({ message: 'Expresso API' }));

// setup namespaced routes.
Object.entries(routeList).forEach(([namespace, router]) =>
  app.use(`/${namespace}`, router)
);

app.use((err, req, res, next) => {
  return res.status(err.statusCode || 500).json({
    message: err.message || 'Internal Server Error',
  });
});

module.exports = app;
