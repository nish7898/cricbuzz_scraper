var mongoose = require('mongoose');

var int_test_match = mongoose.Schema({
    matchLink : String,
    date : String,
    ground : String,
    firstInning : {
        batting : [{
            position : Number,
            name : String,
            link : String,
            runs : Number,
            numberOfBalls : Number,
            numberOfFours : Number,
            numberOfSixes : Number
        }],
        bowling : [{
            position : Number,
            name : String,
            link : String,
            balls : Number,
            maiden : Number,
            runsGiven : Number,
            wickets : Number
        }]
    },
    secondInning : {
        batting : [{
            position : Number,
            name : String,
            link : String,
            runs : Number,
            numberOfBalls : Number,
            numberOfFours : Number,
            numberOfSixes : Number
        }],
        bowling : [{
            position : Number,
            name : String,
            link : String,
            balls : Number,
            maiden : Number,
            runsGiven : Number,
            wickets : Number
        }]
    },
    thirdInning : {
        batting : [{
            position : Number,
            name : String,
            link : String,
            runs : Number,
            numberOfBalls : Number,
            numberOfFours : Number,
            numberOfSixes : Number
        }],
        bowling : [{
            position : Number,
            name : String,
            link : String,
            balls : Number,
            maiden : Number,
            runsGiven : Number,
            wickets : Number
        }]
    },
    fourthInning : {
        batting : [{
            position : Number,
            name : String,
            link : String,
            runs : Number,
            numberOfBalls : Number,
            numberOfFours : Number,
            numberOfSixes : Number
        }],
        bowling : [{
            position : Number,
            name : String,
            link : String,
            balls : Number,
            maiden : Number,
            runsGiven : Number,
            wickets : Number
        }]
    }
});

module.exports = mongoose.model('Internationaltestmatch',int_test_match);