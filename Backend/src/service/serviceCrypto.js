const fs = require('fs');
const api = require('../integrations/reqAPI');
const current = require('../currencies.json');

const restartCurrent = () => {
  console.log('estou no restart');
  const router = 'src/currencies.json';
  const curren = {
    BRL: '5.400',
    EUR: '0.920',
    CAD: '1.440',
  };
  const currentFind = JSON.parse(fs.readFileSync(router, 'utf-8'));

  if (
    currentFind.BRL !== curren.BRL
    || currentFind.EUR !== curren.EUR
    || currentFind.CAD !== curren.CAD
  ) {
    fs.writeFileSync(router, JSON.stringify(curren)); 
  }
};

const convertCurrent = (siglaCur, nameCur, cur, convert) => ({
    code: siglaCur,
    rate: (cur * convert.rate_float).toFixed(4).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
    description: nameCur,
    rate_float: parseFloat((cur * convert.rate_float).toFixed(4)), // eslint-disable-line camelcase
  });

const getCryptoCoin = async () => {
    const response = await api();
    const data = response.message;
    const { bpi: { USD } } = data;
    const siglaCurrent = Object.keys(current);
    const nameCurrent = ['Brazilian Real', 'Euro', 'Canadian Dollar'];
    const valueCurrent = siglaCurrent.map((name, index) => convertCurrent(
      name, nameCurrent[index], current[name], USD,
    ));
    const [BRL, EUR, CAD] = valueCurrent;
  data.bpi = { ...data.bpi, BRL, EUR, CAD };

  return data;
};

const postCryptoJson = (cur, value) => {
  const curren = {
    ...current, [cur]: value,
  };

  fs.writeFile('src/currencies.json', JSON.stringify(curren), (err) => {
    if (err) {
      const erro = { status: 400, message: err };
      throw erro;
    }
  });
  return {
    message: 'Valor alterado com sucesso!',
  };
};

module.exports = {
  getCryptoCoin,
  convertCurrent,
  postCryptoJson,
  restartCurrent,
};