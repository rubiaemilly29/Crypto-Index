const { loginService } = require("../../service/serviceLogin");

describe('login', () => {
  it('Valida que ao ser enviado um email retorna um token de 16 caractere', () => {
    const email = 'convidado@email.com'
    const valid = loginService(email)
    expect(valid).not.toBeNull()
    expect(valid.message).toHaveLength(16)

  })
  it('Valida que ao nao ser enviado um email retorna um erro', () => {
    const valid = loginService()
    expect('status', 400)
    expect(valid.message).toBe('Campos inválidos')
  })
})