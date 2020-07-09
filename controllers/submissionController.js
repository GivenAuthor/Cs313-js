const submissionModel = require('../models/submissionModel');

function getSubmission(req, res) {
    res.render('../submission');
};

module.exports = {
    getSubmission : getSubmission
}