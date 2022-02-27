const serviceCrypto = require('../service/serviceCrypto');

const getCryptoCoin = async (_req, res) => {
    const response = await serviceCrypto.getCryptoCoin();

  return res.status(200).json(response);
};

const postCryptoJson = (req, res) => {
  const { currency, value } = req.body;
  const response = serviceCrypto.postCryptoJson(currency, value);

  res.status(201).json(response);
};

module.exports = {
  getCryptoCoin,
  postCryptoJson,
};
