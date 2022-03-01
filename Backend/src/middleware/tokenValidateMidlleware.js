const validateToken = require('../validations/tokenValidation');

const tokenValidation = async (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token, 'WwCi0e1sd-qhF0cA');
  const validate = validateToken(token);
  if (validate.message) res.status(validate.status).send({ message: validate.message });
  next();
};

module.exports = {
  tokenValidation,
};
