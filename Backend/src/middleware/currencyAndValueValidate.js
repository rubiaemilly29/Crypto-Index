const validatecurrency = require('../validations/currencyValidate');
const validateValue = require('../validations/valueValidate');

const currencyAndValueValidation = (req, res, next) => {
  const { currency, value } = req.body;
  console.log(req.body, currency, value, 'estou no curretvalidation');

  const isCurrencyValid = validatecurrency(currency);

  if (isCurrencyValid) {
    res.status(isCurrencyValid.status).send({ message: isCurrencyValid.message });
  }

  const isValueValid = validateValue(value);

  if (isValueValid) res.status(isValueValid.status).send({ message: isValueValid.message });

  next();
};

module.exports = {
  currencyAndValueValidation,
};