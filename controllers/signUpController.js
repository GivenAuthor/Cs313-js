const signUpModel = require('../models/signUpModel');

function getSignUp(req, res) {
    res.render('../signUp');
};

module.exports = {
    signUp : getSignUp
}