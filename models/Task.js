const { sequelize } = require('../database/database.js');
const { DataTypes } = require('sequelize');

const Task = sequelize.define('Tasks', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  description: {
    type: DataTypes.STRING,
  },
  done: {
    type: DataTypes.BOOLEAN,
  },
});

module.exports = {
  Task,
};
