const frisby = require('frisby');
require('dotenv-safe').load();

const port = process.env.PORT;

const url = `http://localhost:${port}/api`;

describe.skip('Endpoint GET /api/cryto/btc`', () => {
  let token = "wd48Ltw5nd-cDaRg";

  it('Valida que é possível modificar o valor de cambio BRL', async () => {
    await frisby
      .setup({
        request: {
          headers: {
            Authorization: token,
            'Content-Type': 'application/json',
          },
        },
      })
      .post(`${url}/cryto/btc`, {
        currency: "BRL",
        value: "1000.0"
      })
      .expect('status', 201)
      .then((response) => {
        const { json } = response;
        expect(json.message).toEqual('Valor alterado com sucesso!');
      });

  });
  it('Valida que é possível modificar o valor de cambio EUR', async () => {
    await frisby
      .setup({
        request: {
          headers: {
            Authorization: token,
            'Content-Type': 'application/json',
          },
        },
      })
      .post(`${url}/cryto/btc`, {
        currency: "EUR",
        value: "100.0"
      })
      .expect('status', 201)
      .then((response) => {
        const { json } = response;
        expect(json.message).toEqual('Valor alterado com sucesso!');
      });

  });
  it('Valida que é possível modificar o valor de cambio CAD', async () => {
    await frisby
      .setup({
        request: {
          headers: {
            Authorization: token,
            'Content-Type': 'application/json',
          },
        },
      })
      .post(`${url}/cryto/btc`, {
        currency: "CAD",
        value: "100.0"
      })
      .expect('status', 201)
      .then((response) => {
        const { json } = response;
        expect(json.message).toEqual('Valor alterado com sucesso!');
      });

  });
})