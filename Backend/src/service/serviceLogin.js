const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET;
const jwtConfig = {
  expiresIn: '30d',
  algorithm: 'HS256',
};

const loginService = (email) => {
  const jwtEmail = {
    email,
  };
  const token = jwt.sign({ data: jwtEmail }, secret, jwtConfig);

  const response = { status: 400, message: token.slice(-16) };
  return response;
};

module.exports = {
  loginService,
};
