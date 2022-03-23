/* eslint-disable max-len */
const express = require('express');
const validator = require('express-joi-validation').createValidator({});

const userController = require('../controllers/userController');
const userScheme = require('../schema_validations/userScheme');


const userRouter= (User) => {
  // eslint-disable-next-line new-cap
  const userRouter = express.Router();

  const {getUsers, postUsers, updateUser, deleteUserById, getUserById} = userController(User);

  userRouter
      .route('/users')
      .get(getUsers)
      .post(validator.body(userScheme), postUsers);

  userRouter
      .route('/users/:userId')
      .put(updateUser)
      .delete(deleteUserById)
      .get(getUserById);

  return userRouter;
};

module.exports = userRouter;
