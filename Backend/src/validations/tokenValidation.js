const validateToken = (tokenReq) => {
  if (!tokenReq || tokenReq.length !== 16) {
    const erro = { status: 401, message: 'Token not found' };
    return erro;
  }
  return true;
};
module.exports = validateToken;
