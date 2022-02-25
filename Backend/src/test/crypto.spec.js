const frisby = require('frisby');
require('dotenv-safe').load();

const port = process.env.PORT;

const url = `http://localhost:${port}/api`;

describe('Endpoint GET /api/cryto/btc`', () => {

  it('Valida que é possível buscar cotação de câmbio com sucesso', async () => {
    let token;
    await frisby
      .post(`${url}/login`,
        {
          email: 'lewishamilton@gmail.com',
          password: '123456',
        })
      .expect('status', 200)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        token = result;
      });
    
    await frisby
      .setup({
        request: {
          headers: {
            Authorization: token,
            'Content-Type': 'application/json',
          },
        },
      })
      .get(`${url}/cryto/btc`)
      .expect('status', 200)
      .then((response) => {
        const { json } = response;
        expect(json).toHaveProperty('bpi')
        expect(json).toHaveProperty('time')
        expect(json).toHaveProperty('disclaimer')
        expect(json.bpi).toHaveProperty('USD')
        expect(json.bpi).toHaveProperty('BTC')
        expect(json.bpi).toHaveProperty('EUR')
        expect(json.bpi).toHaveProperty('BRL')
        expect(json.bpi).toHaveProperty('CAD')
      });

  });

  it('Valida que não é possível buscar cotação de câmbio sem o token', async () => {

    await frisby
      .get(`${url}/cryto/btc`)
      .expect('status', 401)
      .then((response) => {
        const { json } = response;
        expect(json).toEqual({ message: 'Token not found' })


      });

  });
})