const router = require('express').Router();
const rescue = require('express-rescue');
const controllerLogin = require('../controllers/controllerLogin');
const { LoginValidation } = require('../middleware/loginMidlleware');
const controllerCrypto = require('../controllers/controllerCrypto');
const { tokenValidation } = require('../middleware/tokenValidateMidlleware');
const { currencyAndValueValidation } = require('../middleware/currencyAndValueValidate');

router.post('/login', rescue(LoginValidation), rescue(controllerLogin.login));
router.get('/cryto/btc', rescue(tokenValidation), rescue(controllerCrypto.getCryptoCoin));
router.post(
  '/cryto/btc',
  rescue(tokenValidation),
  rescue(currencyAndValueValidation),
  rescue(controllerCrypto.postCryptoJson),
);

module.exports = router;