require('dotenv').config();
const express = require('express');
const app = express();
const http = require('http');
const signInController = require('./controllers/signInController');
const signUpController = require('./controllers/signUpController');
const signUpModel = require('./models/signUpModel');


app.set('view engine', 'ejs');

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
app.get('/', function (req, res) {
    res.render('../signIn'); });

// SIGN UP
app.get('/signUp', signUpController.signUp);
app.post('/signUp', signUpModel.registerUser);

// HOMEPAGE
app.get('/homepage', function(req, res) {
    res.render('../homepage'); });

 // SEND DATA
app.get('/sendData', function(req, res) {
    res.render('../sendData'); });

// VIEW DATA
app.get('/viewData', function(req, res) {
    res.render('../viewData'); });

app.listen(8080);
console.log("app listening on port 8080");