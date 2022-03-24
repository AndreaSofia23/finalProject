/* eslint-disable max-len */
const express = require('express');
const validator = require('express-joi-validation').createValidator({});

const usersController = require('../controllers/usersController');
const userSchema = require('../schema_validations/userSchema');


const userRouter= (User) => {
  // eslint-disable-next-line new-cap
  const userRouter = express.Router();

  const {getUsers, postUsers, updateUser, deleteUserById, getUserById, postLogIn} = usersController(User);

  userRouter
      .route('/users')
      .get(getUsers)
      .post(validator.body(userSchema), postUsers);

  userRouter
      .route('/users/:userId')
      .put(validator.body(userSchema),updateUser)
      .delete(deleteUserById)
      .get(getUserById);

  userRouter
      .route('/users/logIn')
      .post(postLogIn);

  return userRouter;
};

module.exports = userRouter;
