require('dotenv').config();
const express = require('express');
let path = require('path');
let port = process.env.PORT || 8080;
const app = express();
const http = require('http');
const signInController = require('./controllers/signInController');
const signInModel = require('./models/signInModel');
const signUpController = require('./controllers/signUpController');
const signUpModel = require('./models/signUpModel');
const homepageController = require('./controllers/homepageController');
const homepageModel = require('./models/homepageModel');
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/public', express.static('./public/'));

app.get('/db', async (req, res) => {
  const { Pool } = require('pg');
  const connectionString = process.env.DATABASE_URL;
  const pool = new Pool({
  connectionString: connectionString,
  ssl: true
});
  console.log(connectionString);
  pool.query('SELECT * FROM username;', (err, res) => {
    if (err) throw err;
    for (let row of res.rows) {
      console.log(JSON.stringify(row));
    }
    pool.end();
  });
});

// SIGN IN
app.get('/', signInController.signIn);
app.post('/', signInModel.loginUser);

// SIGN UP
app.get('/signUp', signUpController.signUp);
app.post('/signUp', signUpModel.registerUser);

// HOMEPAGE
app.get('/homepage', homepageController.getHome);
app.post('/homepage', homepageModel.dbRequest, homepageModel.dbPush);

 /* SEND DATA
app.get('/sendData', function(req, res) {
    res.render('../sendData'); });

// VIEW DATA
app.get('/viewData', function(req, res) {
    res.render('../viewData'); });
    */

app.listen(port);
console.log("app listening on port 8080");