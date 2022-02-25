const { restartCurrent } = require('../service/serviceCrypto');
const serviceLogin = require('../service/serviceLogin');

const login = async (req, res) => {
  const { email } = req.body;
  await restartCurrent();
  const response = await serviceLogin.loginService(email);
    
  return res.status(200).json({ token: response.message });
};
  module.exports = {
    login,
  };
