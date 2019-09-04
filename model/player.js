var mongoose = require('mongoose');

var playeSchema = mongoose.Schema({
    test : [{
        matchLink : String,
        date : String,
        batting : {
            firstInning : {
                inningNumber : Number,
                runs : Number,
                numberOfBalls : Number,
                numberOfFours : Number,
                numberOfSixes : Number,
            },
            secondInning : {
                inningNumber : Number,
                runs : Number,
                numberOfBalls : Number,
                numberOfFours : Number,
                numberOfSixes : Number
            },
            thirdInning : {
                inningNumber : Number,
                runs : Number,
                numberOfBalls : Number,
                numberOfFours : Number,
                numberOfSixes : Number
            },
            fourthInning : {
                inningNumber : Number,
                runs : Number,
                numberOfBalls : Number,
                numberOfFours : Number,
                numberOfSixes : Number
            }
        },
        bowling : {
            firstInning : {
                inningNumber : Number,
                overs : Number,
                maiden : Number,
                runsGiven : Number,
                wickets : Number,
            },
            secondInning : {
                inningNumber : Number,
                overs : Number,
                maiden : Number,
                runsGiven : Number,
                wickets : Number,
            },
            thirdInning : {
                inningNumber : Number,
                overs : Number,
                maiden : Number,
                runsGiven : Number,
                wickets : Number,
            },
            fourthInning : {
                inningNumber : Number,
                overs : Number,
                maiden : Number,
                runsGiven : Number,
                wickets : Number,
            }
        },
    }],
    odi : [{
        date : String,
        matchLink : String,
        batting : {
            battingRecords : {
                runs : Number,
                numberOfBalls : Number,
                numberOfFours : Number,
                numberOfSixes : Number,
                strikeRate : Number
            },
            firstInning : {
                runs : Number,
                numberOfBalls : Number,
                numberOfFours : Number,
                numberOfSixes : Number,
                strikeRate : Number
            },
            secondInning : {
                runs : Number,
                numberOfBalls : Number,
                numberOfFours : Number,
                numberOfSixes : Number,
                strikeRate : Number
            }
        },
        bowling : {
            bowlingRecords : {
                overs : Number,
                maiden : Number,
                runsGiven : Number,
                wickets : Number,
            },
            firstInning : {
                overs : Number,
                maiden : Number,
                runsGiven : Number,
                wickets : Number
            },
            secondInning : {
                overs : Number,
                maiden : Number,
                runsGiven : Number,
                wickets : Number
            }
        },
    }],
    t20 : [{
        date : String,
        matchLink : String,
        batting : {
            battingRecords : {
                runs : Number,
                numberOfBalls : Number,
                numberOfFours : Number,
                numberOfSixes : Number,
                strikeRate : Number
            },
            firstInning : {
                runs : Number,
                numberOfBalls : Number,
                numberOfFours : Number,
                numberOfSixes : Number,
                strikeRate : Number
            },
            secondInning : {
                runs : Number,
                numberOfBalls : Number,
                numberOfFours : Number,
                numberOfSixes : Number,
                strikeRate : Number
            }
        },
        bowling : {
            bowlingRecords : {
                overs : Number,
                maiden : Number,
                runsGiven : Number,
                wickets : Number,
            },
            firstInning : {
                overs : Number,
                maiden : Number,
                runsGiven : Number,
                wickets : Number
            },
            secondInning : {
                overs : Number,
                maiden : Number,
                runsGiven : Number,
                wickets : Number
            }
        },
    }],
});

module.exports = mongoose.model('Player',playeSchema);