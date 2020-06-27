require('dotenv').config();
const express = require('express');
const app = express();
const http = require('http');
const signInController = require('./models/signUpModel');
/**************************

https://expressjs.com/en/guide/database-integration.html
var pgp = require('pg-promise')
var db = pgp('postgres://username:password@host:port/database')

db.one('SELECT $1 AS value', 123)
  .then(function (data) {
    console.log('DATA:', data.value)
  })
  .catch(function (error) {
    console.log('ERROR:', error)
  })
**************************
const { Client } = require('pg');
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});
*/

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
app.get('/signUp', function (req, res) {
  res.render('../signUp');
});
app.post('/signUp', signInController.registerUser);

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