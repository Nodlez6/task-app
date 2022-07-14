const { User } = require('../models/User');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    const data = users.map((elem) => elem.dataValues);

    res.status(200).json({
      status: 'success',
      data: {
        users: data,
      },
    });
  } catch (err) {
    console.log('hubo un error');
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findAll({
      where: {
        id: id * 1,
      },
    });

    res.status(200).json({
      status: 'success',
      data: {
        user: user[0].dataValues,
      },
    });
    console.log(user);
  } catch (err) {
    console.log('No se encontró al usuario');
  }
};

const createUser = (req, res) => {
  console.log(req.body);
  try {
  } catch (error) {}
};

const updateUser = (req, res) => {};

const deleteUser = (req, res) => {};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
};
