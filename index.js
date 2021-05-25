const express = require('express');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/sigfox',{
  useNewUrlParser: true
});

const app = express();
app.listen(4000, 'localhost', () => {
  console.log('El servidor esta funcionando');
})