const recoverPasswordModel = require('../models/recoverPasswordModel');

function getRecover(req, res) {
    res.render('../reovery');
};

module.exports = {
    getRecover: getRecover
}