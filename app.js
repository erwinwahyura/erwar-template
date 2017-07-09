const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose');

//you can change database by yourself by typing your db name in below after mongodb://localhost/your_database_name
mongoose.connect('mongodb://localhost/erwar-todoFancy');

//this is setting when you are using some third party for online db, for the example im using mlab
// mongoose.connect('mongodb://<erwinwahyura>:<dbpassword>@ds121222.mlab.com:21222/lab-hactiv8-overflow');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connection success!!!');
});

var index = require('./routes/index')

var app = express()

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);

app.listen(3000)

module.exports = app
