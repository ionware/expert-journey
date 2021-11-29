const mongoose = require('mongoose');

module.exports = () => {
  const { DB_NAME, DB_PASSWORD, DB_USER, DB_HOST, DB_PORT } = process.env;
  if (!DB_HOST) throw new Error('Database Host is not defined');

  const connectionString = `mongodb://${DB_HOST}:${DB_PORT || '27017'}`;

  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    user: DB_USER,
    pass: DB_PASSWORD,
    dbName: DB_NAME,
  });
};
