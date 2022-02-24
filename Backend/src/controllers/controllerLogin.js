const login = (req, res) => {
  try {
    const { email, password } = req.body;
    const response = serviceLogin.login(email, password);
    return res.status(200).json(response.message);
  } catch (e) {
    console.log(e);
  }
};
  module.exports = {
    login,
  };
