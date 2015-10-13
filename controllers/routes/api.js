var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var schemas = require('../../models/models');

/* GET API HELP RENDERED TO BROWSER*/
router.get('/help', function(req, res) {
        res.redirect('../../static_content/apihelp');
    }
);

/* GET ALL SURVEY RESULTS JSON */
/**
 * @api {get} /results/
 * @apiName Results
 * @apiGroup AbejaTest
 * @apiSuccess {Number} _id ID of the Mongo Document
 * @apiSuccess {String} Sex Sex of the Interviewee
 * @apiSuccess {Number} Hungry  representative value of Hunger (1-5)
 * @apiSuccess {Number} Tired  representative value of Tiredness (1-5)
 * @apiSuccess {Number} Sleepy  representative value of Sleepiness (1-5)
 * @apiSuccess {Date} DateInserted  UTC date inserted
 */

router.get('/', function(req, res) {
    return schemas.SurveyModel.find(function (err, survey) {
        if (!err) {
            return res.send(survey);
        } else {
            return console.log(err);
        }
    });
});

/* POST SURVEY API */
router.post('/', function(req, res) {
    var sex = req.body.sex;
    var hungry = req.body.hungry;
    var tired = req.body.tired;
    var sleepy = req.body.sleepy;
    //call the create function for our database
    var SurvResult = mongoose.model('result', schemas.SurveyModel);

    var survey = new SurvResult({ Sex:sex, Hungry:hungry, Tired:tired, Sleepy:sleepy });
    survey.save(function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            //Blob has been created
            console.log('POST creating new result: ' + result);
            res.format({

                html: function(){
                    res.redirect('../../SurveyResults#thanks');
                },
                //JSON response
                json: function(){
                    res.json(result);
                }
            });
        }
    })
});
module.exports = router;