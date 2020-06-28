const signUpModel = require('../models/signUpModel');

function signUp(req, res) {
    res.render('../signUp');
};

module.exports = {
    signUp: signUp
}