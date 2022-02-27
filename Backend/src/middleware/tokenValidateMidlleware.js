const validateToken = require('../validations/tokenValidation');

const tokenValidation = async (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  const validate = validateToken(token);
  if (validate.message) throw validate;
  next();
};

module.exports = {
  tokenValidation,
};
