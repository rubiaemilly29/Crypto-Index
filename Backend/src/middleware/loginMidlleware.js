const validateEmail = require('../validations/emailValidate');
const validatePassword = require('../validations/passwordValidate');

const LoginValidation = async (req, res, next) => {
  const { email, password } = req.body;
  const isEmailValid = await validateEmail(email);

  if (isEmailValid) throw isEmailValid;

  const isPwdValid = await validatePassword(password);

  if (isPwdValid) throw isPwdValid;

  next();
};

module.exports = {
  LoginValidation,
};