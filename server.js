var express = require('express');
var port = process.env.PORT || 8080;
var app = express();
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
**************************/

//app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('../signIn');
});

app.get('/signUp', function(req, res) {
      res.render('../signUp');
});

app.get('/homepage', function(req, res) {
    res.render('../homepage');
});

app.get('/sendData', function(req, res) {
    res.render('../sendData');
});

app.get('/viewData', function(req, res) {
    res.render('../viewData');
});

app.listen(8080);
console.log("app listening on port 8080");