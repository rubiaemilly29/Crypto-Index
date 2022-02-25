const validateToken = require('../validations/tokenValidation');

const tokenValidation = async (req, res, next) => {
  const tokenReq = req.headers.authorization;
  const validate = validateToken(tokenReq);
  if (validate.message) throw validate;
  next();
};

module.exports = {
  tokenValidation,
};