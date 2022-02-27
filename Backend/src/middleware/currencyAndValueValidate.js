const validatecurrency = require('../validations/currencyValidate');
const validateValue = require('../validations/valueValidate');

const currencyAndValueValidation = (req, _res, next) => {
  const { currency, value } = req.body;
  console.log(req.body, currency, value, 'estou no curretvalidation');

  const isCurrencyValid = validatecurrency(currency);

  if (isCurrencyValid) throw isCurrencyValid;

  const isValueValid = validateValue(value);

  if (isValueValid) throw isValueValid;

  next();
};

module.exports = {
  currencyAndValueValidation,
};