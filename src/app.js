const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const routeList = require('@routes');

const app = express(); // intialize express app.

// setup middlewares.
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());

// test endpoint.
app.get('/', (req, res) => res.status(200).json({ message: 'Expresso API' }));

// setup namespaced routes.
Object.entries(routeList).forEach(([namespace, router]) =>
  app.use(`/${namespace}`, router)
);

// TODO: add error handlers.

module.exports = app;
