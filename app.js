const express = require('express');
const app = express();
const path = require('path')
const dotenv = require('dotenv');
dotenv.config({ path: path.join(__dirname, "config/config.env") });


const products = require('./routes/product')

app.use(express.json());
app.use('/api/v1/', products)

module.exports = app;