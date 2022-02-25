const serviceCrypto = require('../service/serviceCrypto');

const getCryptoCoin = async (_req, res) => {
    const response = await serviceCrypto.getCryptoCoin();

  return res.status(200).json(response);
};

module.exports = {
  getCryptoCoin,
};
