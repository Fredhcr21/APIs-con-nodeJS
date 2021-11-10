const express = require('express');
const cors = require('cors');
const routesAPI = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

const app = express();
const port = 2121;

app.use(express.json());

const whitelist = ['http://localhost:1515', 'https://API-store'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('sitio denegado'));
    }
  }
}

app.use(cors(options));

app.get('/', (req, res) => {
  res.send('Hello express server');
});

app.get('/new-route', (req, res) => {
  res.send('Hello new route');
});

routesAPI(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('mi Port' + port);
});
