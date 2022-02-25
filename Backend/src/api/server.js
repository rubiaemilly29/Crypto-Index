const express = require('express');
require('dotenv-safe').load();
const rescue = require('express-rescue');
const cors = require('cors');
const morgan = require('morgan');
const errorRotas = require('../middleware/errorsRotas');
const errorApi = require('../middleware/errorApi');
const router = require('../router');

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use('/api', router);
const port = process.env.PORT;

app.use(rescue(errorRotas));

app.use(errorApi);

app.listen(port, () => {
console.log(`Listening to port http://localhost:${port}`);
});