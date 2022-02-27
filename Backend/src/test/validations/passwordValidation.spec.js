const validatePassword = require("../../validations/passwordValidate");

describe('passwordValidade', () => {
  it('Valida password correta', () => {
    const password = 123456
    const isValidPassoword = validatePassword(password)
    expect(isValidPassoword).toBeNull  
  });
  it('Valida que não é possível funcionar sem o parametro password`', () => {
    const isValidPassoword = validatePassword()
    expect(isValidPassoword).toEqual({ status: 400, message: 'Campos inválidos' })
  });
  it('Valida que não é possível o paramentro password esta em branco', () => {
    const password = ''
    const isValidPassoword = validatePassword(password)
    expect(isValidPassoword).toEqual({ status: 400, message: 'Campos inválidos' })
  })
})