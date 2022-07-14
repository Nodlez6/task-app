const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('task_app', 'nodlez', 'admin', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = {
  sequelize,
};
