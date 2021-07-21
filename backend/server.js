const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Init Middleware
app.use(express.json({ extended: false }));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// API
// Example
app.get('/', (req, res) => res.status(200).json({ message: 'API Running' }));
// app.use('/api', require('./routes/auth'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app;
