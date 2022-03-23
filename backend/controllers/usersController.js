/* eslint-disable max-len */

const userController = (User) => {
  const jwt = require('jsonwebtoken');
  const bcrypt = require('bcrypt');

  const getUsers = async (req, res) => {
    const response = await User.find();
    res.status(200).json(response);
  };

  const getUserById = async (req, res) => {
    const response = await User.findById(req.params.userId);
    res.status(200).json(response);
  };

  const postUsers = async (req, res) => {
    const user = new User(req.body);
    user.password = await bcrypt.hash(user.password, 10);
    await user.save();
    res.status(202).json({message: 'The User has been create sucessfully', user});
  };

  const updateUser = async (req, res) => {
    const response = await User.updateOne(
        {_id: req.params.userId},
        {
          $set: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.userName,
            password: await bcrypt.hash(req.body.password, 10),
            city: req.body.city,
            email: req.body.email,
          },
        });
    res.status(202).json({message: 'The User has been update sucessfully', response});
  };

  const deleteUserById = async (req, res) => {
    await User.findByIdAndDelete(req.params.userId);
    res.status(202).json('The User has been deleted sucessfully');
  };

  const postLogIn = async (req, res) => {
    const {body} = req;
    console.log(body);
    const user = await User.findOne({'userName': body.userName});
    if ( user && await bcrypt.compare(body.password, user.password)) {
      const payload = {
        userName: user.userName,
        password: user.password,
      };

      const token = jwt.sign(payload, 'secretKey', {
        expiresIn: '24h',
      });
      res.json({mensaje: 'Autenticación correcta', token});
    } else {
      res.json({mensaje: 'Credenciales Invalidas'});
    }
  };

  return {getUsers, postUsers, updateUser, deleteUserById, getUserById, postLogIn};
};


module.exports = userController;
