require('dotenv').config();

const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
const http = require('http');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const jwtKey = "my_key";
const jwtExpirySeconds = 300;

const signInController = require('./controllers/signInController');
const signInModel = require('./models/signInModel');
const signUpController = require('./controllers/signUpController');
const signUpModel = require('./models/signUpModel');
const homepageController = require('./controllers/homepageController');
const homepageModel = require('./models/homepageModel');
const submissionController = require('./controllers/submissionController');
const submissionModel = require('./models/submissionModel');
const recoveryController = require('./controllers/recoverPasswordController');
const recoveryModel = require('.models/recoverPasswordModel');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static('./public/'));
app.use(cookieParser());

// SIGN IN
app.get('/', signInController.signIn);
app.post('/', signInModel.loginUser);

// SIGN UP
app.get('/signUp', signUpController.signUp);
app.post('/signUp', signUpModel.registerUser);

// PASSWORD RECOVERY
app.get('/recovery', recoveryController.getRecover);
app.post('/recovery', recoveryModel.sendEmail);

// HOMEPAGE
app.get('/homepage', homepageController.getHome);
app.post('/homepage', homepageModel.dbRequest);

// SUBMISSION PAGE
app.get('/submission', submissionController.getSubmission);
app.post('/submission', submissionModel.dbPush);

app.listen(port);
console.log("app listening on port 8080");