const { sequelize } = require('../database/database');
const { DataTypes } = require('sequelize');
const { Task } = require('./Task');

const User = sequelize.define('Users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  last_name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
});

User.hasMany(Task);
Task.belongsTo(User);

module.exports = {
  User,
};
