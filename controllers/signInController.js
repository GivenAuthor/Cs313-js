const signInModel = require('../models/signInModel');

function signIn(req, res) {
    res.render('../signIn');
};

module.exports = {
    signIn : signIn
}