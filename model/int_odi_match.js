var mongoose = require('mongoose');

var int_odi_match = mongoose.Schema({
    matchLink : String,
    date : String,
    ground : String,
    firstInning : {
        batting : [{
            name : String,
            link : String,
            runs : Number,
            numberOfBalls : Number,
            numberOfFours : Number,
            numberOfSixes : Number
        }],
        bowling : [{
            name : String,
            link : String,
            inningNumber : Number,
            overs : Number,
            maiden : Number,
            runsGiven : Number,
            wickets : Number
        }]
    },
    secondInning : {
        batting : [{
            name : String,
            link : String,
            runs : Number,
            numberOfBalls : Number,
            numberOfFours : Number,
            numberOfSixes : Number
        }],
        bowling : [{
            name : String,
            link : String,
            inningNumber : Number,
            overs : Number,
            maiden : Number,
            runsGiven : Number,
            wickets : Number
        }]
    }
});

module.exports = mongoose.model('Internationalodimatch',int_odi_match);