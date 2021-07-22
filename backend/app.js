const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');

const app = express();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// API
// Example
app.get('/', (req, res) => res.status(200).json({ message: 'API Running' }));
app.post('/api/auth', (req, res) => {
  console.log(req.body);
  if (req.body.email === 'admin' && req.body.password === '1234') {
    return res.status(200).json({ access: true });
  }
  return res.status(400).json({ message: 'User not found.' });
});

module.exports = app;
