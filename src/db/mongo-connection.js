const mongoose = require('mongoose');

module.exports = () => {
  const { DB_NAME, DB_PASSWORD, DB_USER, DB_HOST } = process.env;
  if (!DB_HOST) throw new Error('Database Host is not defined');

  const connectionString = `mongodb+srv://${DB_HOST}`;

  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    user: DB_USER,
    pass: DB_PASSWORD,
    dbName: DB_NAME,
  });
};
