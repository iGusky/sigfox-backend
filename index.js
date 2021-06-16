const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
require('dotenv').config({path: 'variables.env'});
const cors = require('cors');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URL,{
  useNewUrlParser: true
});

const app = express();

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );

app.use(cors());
app.use('/', routes());

const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`Servidor funcionando en ${host}:${port}`);
})