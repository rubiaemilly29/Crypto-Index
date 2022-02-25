const validateToken = require("../../validations/tokenValidation");


describe('ValidateToken', () => {
  it('Valida Token correto', () => {
    const Token = 'wpdjeu3jd8492id8'
    const isValidToken = validateToken(Token)
    expect(isValidToken).toBeNull
  });

  it('Valida que não é possível o paramentro Token esta em branco`', () => {
    const Token = ''
    const isValidToken = validateToken(Token)
    console.log(isValidToken);
    expect(isValidToken).toEqual({ status: 401, message: 'Token not found' })
  });

  it('Valida que não é possível funcionar sem o parametro Token', async () => {
    const isValidToken = validateToken()
    expect(isValidToken).toEqual({ status: 401, message: 'Token not found' })
  });

})