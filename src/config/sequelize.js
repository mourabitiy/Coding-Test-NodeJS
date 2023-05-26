// config/sequelize.js
const { Sequelize } = require('sequelize');

//Todo: Change the database name, username and password to your own
const sequelize = new Sequelize('app_reviews', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
