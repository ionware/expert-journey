require('module-alias/register');
require('dotenv').config();
const http = require('http');
const app = require('@root/app');

const server = http.createServer(app);

const port = process.env.APP_PORT || 3000;
const host = process.env.APP_URL || 'http://localhost';

// TODO: start MongoDB before starting the server.
server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started on  ${host}:${port}`);
});
