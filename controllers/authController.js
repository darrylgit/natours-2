const User = require('./../models/userModel');
const catchAsync = require('./../utilities/catchAysnc');

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword
  });

  res.status(201).json({
    status: 'success',
    data: {
      user: newUser
    }
  });
});
