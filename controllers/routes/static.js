var express = require('express');
var router = express.Router();

/* Go Home */
router.get('/', function(req, res, next) {
    res.render('index');
});

/* Results Page */
router.get('/SurveyResults', function(req,res, next){
    res.render('results');
});

module.exports = router;