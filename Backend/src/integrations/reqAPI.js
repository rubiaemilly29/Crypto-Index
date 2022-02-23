const axios = require('axios');

const currentPrice = async () => {
  try {
    const response = await axios({
      method: 'get',
      url: 'https://api.coindesk.com/v1/bpi/currentprice.json',
    });
  return { status: response.status, message: response.data };
  } catch (error) {
    throw error.response;
  }
};
const currentPriceSpecific = async (current) => {
  try {
    const response = await axios({
      method: 'get',
      url: `https://api.coindesk.com/v1/bpi/currentprice/${current}.json`,
    });
    return { status: response.status, message: response.data };
  } catch (error) {
    throw error.response;
  }
};

// currentPrice().then(e => console.log(e)).catch(e => console.log(e))
module.exports = {
  currentPrice,
  currentPriceSpecific,
};
