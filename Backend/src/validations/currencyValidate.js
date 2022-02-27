const validatecurrency = (currency) => {
  if (
  currency !== 'BRL' && currency !== 'EUR' && currency !== 'CAD'
  ) return { status: 400, message: 'Moeda inválida' };

  return null;
};

module.exports = validatecurrency;