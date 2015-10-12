var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/abejagroup');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
    // Connection Open
});

var Schema = mongoose.Schema;
var SurveyResult = new Schema({
        Sex: {type: String, required: true},
        Hungry: {type: Number, required: true},
        Tired: {type: Number, required: true},
        Sleepy: {type: Number, required: true},
        DateInserted: {type: Date, default: Date.now}
    });

    var SurveyModel = mongoose.model('result', SurveyResult);

module.exports.Schema = Schema;
module.exports.SurveryResult = SurveyResult;
module.exports.SurveyModel = SurveyModel;