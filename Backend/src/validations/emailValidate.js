const validateEmail = (email) => {
  const validRegex = new RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/,
  );

  if (!email || email === '') return { status: 400, message: 'Campos inválidos' };

  const validEmail = validRegex.test(email);

  if (!validEmail) return { status: 400, message: 'Campos inválidos' };
  
  return null;
};

module.exports = validateEmail;
