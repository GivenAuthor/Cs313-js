var express = require{'express'};
var port = process.env.PORT || 8080;

var app = express();

app.get('/', function (req, res) {
    res.render('signIn');
});

app.get('/signUp', function(req, res) {
      res.render('signUp');
});

app.get('/homepage', function(req, res) {
    res.render('homepage');
});

app.get('/sendData', function(req, res) {
    res.render('sendData');
});

app.get('/viewData', function(req, res) {
    res.render('viewData');
});

app.listen(8080);
console.log("app listening on port 8080");