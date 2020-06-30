const homepageModel = require('../models/homepageModel');

function getHome(req, res) {
    res.render('../homepage');
};

module.exports = {
    getHome : getHome
}