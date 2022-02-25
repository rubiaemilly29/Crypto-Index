const { convertCurrent, getCryptoCoin } = require("../../service/serviceCrypto");
const current = require('../../currencies.json');

describe('getCryptoCoin', () => {
  it('Valida que ao ser chamado a funcao retorne um objeto com propriedade certas', async () => {
    const getCrypto = await getCryptoCoin()
    expect(getCrypto).toHaveProperty('bpi')
    expect(getCrypto).toHaveProperty('time')
    expect(getCrypto).toHaveProperty('disclaimer')
  })
  it('Valida que dentro da propriedade bpi tenha propriedades com nome de moedas', async () => {
    const getCrypto = await getCryptoCoin()
    expect(getCrypto.bpi).toHaveProperty('USD')
    expect(getCrypto.bpi).toHaveProperty('BTC')
    expect(getCrypto.bpi).toHaveProperty('EUR')
    expect(getCrypto.bpi).toHaveProperty('BRL')
    expect(getCrypto.bpi).toHaveProperty('CAD')
  })
  it('Valida que dentro das propriedades com nome de moedas tenha informacoes sobre a moeda', async () => {
    const getCrypto = await getCryptoCoin()
    const {EUR, BRL, CAD, BTC, USD} = getCrypto.bpi
    const crypt = []
    crypt.push(EUR, BRL, CAD, BTC, USD)
    crypt.forEach(element => {
      expect(element).toHaveProperty('code')
      expect(element).toHaveProperty('rate')
      expect(element).toHaveProperty('description')
      expect(element).toHaveProperty('rate_float')
    });
    expect(BRL.code).toEqual('BRL')
    expect(BRL.description).toEqual('Brazilian Real')
  })
})

describe('convertCurrent', () => {
  it('Valida que ao passar paramentros retorne informacoes sobre a moeda', async () => {
    const getCrypto = await getCryptoCoin()
    const {USD} = getCrypto.bpi
    const element = convertCurrent('BRL', 'Brazilian Real', current.BRL, USD);

    expect(element).toHaveProperty('code')
    expect(element).toHaveProperty('rate')
    expect(element).toHaveProperty('description')
    expect(element).toHaveProperty('rate_float')
    expect(element.code).toEqual('BRL')
    expect(element.description).toEqual('Brazilian Real')
  })
})