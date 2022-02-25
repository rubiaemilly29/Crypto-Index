const api = require('../integrations/reqAPI');
const current = require('../currencies.json');

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

module.exports = {
  getCryptoCoin,
  convertCurrent,
};