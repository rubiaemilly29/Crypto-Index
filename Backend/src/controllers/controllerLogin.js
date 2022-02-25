const serviceLogin = require('../service/serviceLogin').loginService;

const login = (req, res) => {
  try {
    const { email } = req.body;
    const response = serviceLogin(email);
    
    return res.status(200).json(response.message);
  } catch (e) {
    const err = e;
    throw err;
  }
};
  module.exports = {
    login,
  };
