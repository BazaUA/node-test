/* eslint-disable no-console */
const Sequelize = require('sequelize');

module.exports = () => {
  const nameOfDb = 'db_test';
  const user = 'root';
  const password = 'root';
  const sequelize = new Sequelize(`mysql://${user}:${password}@localhost:3306/${nameOfDb}`);
  sequelize
    .authenticate()
    .then(() => (console.log('Connection has been established successfully.')))
    .catch(err => (console.error('Unable to connect to the database:', err)));
  return sequelize;
};
