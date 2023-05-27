
// app.js
const express = require('express');
const bodyParser = require('body-parser');
const reviewRoutes = require('./src/routes/reviewRoutes');

require('dotenv').config();
const config = require('./config/config.json')[process.env.NODE_ENV || 'development'];

require('./swagger');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

app.use('/reviews', reviewRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
