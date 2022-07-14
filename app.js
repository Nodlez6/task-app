const express = require('express');
const app = express();
app.use(express.json());
const { sequelize } = require('./database/database.js');
require('./models/User');
require('./controllers/userController');
const {
  getAllUsers,
  getUserById,
  createUser,
} = require('./controllers/userController');

(async () => {
  try {
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

const port = 3002;

//Users
//CRUD
app.get('/api/v1/users', getAllUsers);
app.get('/api/v1/users/:id', getUserById);
app.post('/api/v1/users/:id', createUser);

app.listen(port, () => {
  console.log(`Estoy escuchando en el puerto ${port}`);
});

exports.module = {
  sequelize,
};
