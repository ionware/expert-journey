require('module-alias/register');
require('dotenv').config();
const http = require('http');
const dbConnection = require('@db/mongo-connection');
const app = require('@root/app');

const server = http.createServer(app);

const port = process.env.APP_PORT || 3000;
const host = process.env.APP_URL || 'http://localhost';

const startApp = () =>
  server.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server started on  ${host}:${port}`);
  });

// establish databasr connection and init app
dbConnection()
  .then(startApp)
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error(`An error occurred: ${err}`);
  });
