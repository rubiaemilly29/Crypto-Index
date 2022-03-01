const validateEmail = require('../validations/emailValidate');
const validatePassword = require('../validations/passwordValidate');

const LoginValidation = async (req, res, next) => {
  const { email, password } = req.body;
  const isEmailValid = await validateEmail(email);

  if (isEmailValid) res.status(isEmailValid.status).send({ message: isEmailValid.message });

  const isPwdValid = await validatePassword(password);

  if (isPwdValid) res.status(isPwdValid.status).send({ message: isPwdValid.message });

  next();
};

module.exports = {
  LoginValidation,
};