const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(
  'postgres://postgres:root@localhost:5432/stocks ',
  {
    dialect: 'postgres', // Replace with your database dialect
  }
);

module.exports = sequelize;
