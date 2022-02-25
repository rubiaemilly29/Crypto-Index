const axios = require('axios');

const currentPrice = async () => {
  try {
    const response = await axios({
      method: 'get',
      url: 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json',
    });
  return { status: response.status, message: response.data };
  } catch (error) {
    throw error.response;
  }
};

module.exports = {
  currentPrice,
};
