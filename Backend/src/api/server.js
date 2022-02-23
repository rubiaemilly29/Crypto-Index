const express = require('express');
require('dotenv-safe').load();
const rescue = require('express-rescue');
const cors = require('cors');
const fs = require('fs');
const morgan = require('morgan');
const path = require('path');
const { currentPrice } = require('../integrations/reqAPI');
const errorRotas = require('../middleware/errorsRotas');
const errorApi = require('../middleware/errorApi');

// const router = require('./src/routes/routes');

const accessLogStream = fs.createWriteStream(
    path.join('src', 'logs', 'access.log'), { flags: 'a' },
);

const app = express();
app.use(morgan('combined', { stream: accessLogStream }));
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use('/api', currentPrice);
const port = process.env.PORT;

app.use(rescue(errorRotas));

app.use(errorApi);

app.listen(port, () => {
console.log(`Listening to port http://localhost:${port}`);
});