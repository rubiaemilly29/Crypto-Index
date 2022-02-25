const json = require('../currencies.json');

const getCryptoCoin = (_req, res) => {

  res.status(200).send('oi');
};

module.exports = {
  getCryptoCoin,
};
