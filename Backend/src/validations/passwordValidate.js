const validatePassword = (pwd) => {
  if (!pwd || pwd === '') {
     return { status: 400, message: 'Campos inválidos' };
  }
  return null;
};

module.exports = validatePassword;
