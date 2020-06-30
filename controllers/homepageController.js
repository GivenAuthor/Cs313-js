const homepageModel = require('../models/homepageModel');

function signIn(req, res) {
    res.render('../homepage');
};

module.exports = {
    signIn : signIn
}