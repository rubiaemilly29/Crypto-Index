const jwt = require('jsonwebtoken');
require('dotenv').config();

let token;

const secret = process.env.JWT_SECRET;
const jwtConfig = {
  expiresIn: '30d',
  algorithm: 'HS256',
};

const loginService = (email) => {
  if (!email) {
    const response = { status: 400, message: 'Campo invalido' };
    throw response;
  }
    const userWithoutPwd = {
      email,
  };
  token = jwt.sign({ data: userWithoutPwd }, secret, jwtConfig);
  console.log(token);
  const response = { status: 400, message: token.slice(-16) };
  return response;
};

module.exports = {
  loginService,
};
