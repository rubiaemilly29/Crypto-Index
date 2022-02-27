const validateEmail = require("../../validations/emailValidate");

describe('ValidateEmail', () => {
  it('Valida email correto', () => {
    const email = 'yoda@email.com'
    const isValidEmail = validateEmail(email)
    expect(isValidEmail).toBeNull
  });

  it('Valida que não é possível o paramentro email esta em branco`', () => {
    const email = ''
    const isValidEmail = validateEmail(email)
    expect(isValidEmail).toEqual({ status: 400, message: 'Campos inválidos' })
  });

  it('Valida que não é possível funcionar sem o parametro email', async () => {
    const isValidEmail = validateEmail()
    expect(isValidEmail).toEqual({ status: 400, message: 'Campos inválidos' })
  });

})