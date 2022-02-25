const validateValue = (value) => {
  const valueRegex = /^[0-9]*\.[0-9]+$/i;

  if (
    !valueRegex.test(value) || typeof value !== 'string' || JSON.parse(value) < 0 || value === ''
  ) return { status: 400, message: 'Valor inválido' };

  return null;
};

module.exports = validateValue;