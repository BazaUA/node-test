/* eslint-disable no-console */
import Sequelize from 'sequelize';

export default () => {
  const sequelize = new Sequelize('mysql://root:root@localhost:3306/db_test');
  sequelize
    .authenticate()
    .then(() => (console.log('Connection has been established successfully.')))
    .catch(err => (console.error('Unable to connect to the database:', err)));
  return sequelize;
};
