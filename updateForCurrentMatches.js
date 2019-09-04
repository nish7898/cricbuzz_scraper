var axios = require('axios');
var cheerio = require('cheerio');

//=================DATABASE INSERTION=====================//

var mongoose = require('mongoose');
var urlOfDatabase = 'mongodb://127.0.0.1:27017/cricstats';

mongoose.connect(urlOfDatabase);

function addTestMatchesToDatabase(statsForMatch,matchDetails,matchLevel){
    var testMatchSchema;
    if(matchLevel==="INT")
    testMatchSchema=require('./model/int_test_match');
    if(matchLevel==="DOM")
    testMatchSchema=require('./model/dom_test_match');
    return new Promise(function(resolve,reject){
        testMatchSchema.findOne({'matchLink' : matchDetails.matchLink},function(error,matchDetailsReceived){
            if(!matchDetailsReceived){
                var newTestMatchSchema = new testMatchSchema();
                newTestMatchSchema.matchLink = matchDetails.matchLink;
                newTestMatchSchema.ground = matchDetails.ground;
                newTestMatchSchema.date = matchDetails.date;
                for(let i=0;i<statsForMatch.scoreOfBatsmanArrayInFirstInnings.length;i++){
                    newTestMatchSchema.firstInning.batting.push({
                        position : i+1,
                        name : statsForMatch.scoreOfBatsmanArrayInFirstInnings[i].name,
                        link : statsForMatch.scoreOfBatsmanArrayInFirstInnings[i].link,
                        runs : statsForMatch.scoreOfBatsmanArrayInFirstInnings[i].runs,
                        numberOfBalls : statsForMatch.scoreOfBatsmanArrayInFirstInnings[i].balls,
                        numberOfFours : statsForMatch.scoreOfBatsmanArrayInFirstInnings[i].fours,
                        numberOfSixes : statsForMatch.scoreOfBatsmanArrayInFirstInnings[i].sixes
                    })
                }
                for(let i=0;i<statsForMatch.scoreOfBatsmanArrayInSecondInnings.length;i++){
                    newTestMatchSchema.secondInning.batting.push({
                        position : i+1,
                        name : statsForMatch.scoreOfBatsmanArrayInSecondInnings[i].name,
                        link : statsForMatch.scoreOfBatsmanArrayInSecondInnings[i].link,
                        runs : statsForMatch.scoreOfBatsmanArrayInSecondInnings[i].runs,
                        numberOfBalls : statsForMatch.scoreOfBatsmanArrayInSecondInnings[i].balls,
                        numberOfFours : statsForMatch.scoreOfBatsmanArrayInSecondInnings[i].fours,
                        numberOfSixes : statsForMatch.scoreOfBatsmanArrayInSecondInnings[i].sixes
                    })
                }
                for(let i=0;i<statsForMatch.scoreOfBatsmanArrayInThirdInnings.length;i++){
                    newTestMatchSchema.thirdInning.batting.push({
                        position : i+1,
                        name : statsForMatch.scoreOfBatsmanArrayInThirdInnings[i].name,
                        link : statsForMatch.scoreOfBatsmanArrayInThirdInnings[i].link,
                        runs : statsForMatch.scoreOfBatsmanArrayInThirdInnings[i].runs,
                        numberOfBalls : statsForMatch.scoreOfBatsmanArrayInThirdInnings[i].balls,
                        numberOfFours : statsForMatch.scoreOfBatsmanArrayInThirdInnings[i].fours,
                        numberOfSixes : statsForMatch.scoreOfBatsmanArrayInThirdInnings[i].sixes
                    })
                }
                for(let i=0;i<statsForMatch.scoreOfBatsmanArrayInFourthInnings.length;i++){
                    newTestMatchSchema.fourthInning.batting.push({
                        position : i+1,
                        name : statsForMatch.scoreOfBatsmanArrayInFourthInnings[i].name,
                        link : statsForMatch.scoreOfBatsmanArrayInFourthInnings[i].link,
                        runs : statsForMatch.scoreOfBatsmanArrayInFourthInnings[i].runs,
                        numberOfBalls : statsForMatch.scoreOfBatsmanArrayInFourthInnings[i].balls,
                        numberOfFours : statsForMatch.scoreOfBatsmanArrayInFourthInnings[i].fours,
                        numberOfSixes : statsForMatch.scoreOfBatsmanArrayInFourthInnings[i].sixes
                    })
                }
                for(let i=0;i<statsForMatch.scoreOfBowlersArrayInFirstInnings.length;i++){
                    newTestMatchSchema.firstInning.bowling.push({
                        position : i+1,
                        name : statsForMatch.scoreOfBowlersArrayInFirstInnings[i].name,
                        link : statsForMatch.scoreOfBowlersArrayInFirstInnings[i].link,
                        balls : statsForMatch.scoreOfBowlersArrayInFirstInnings[i].balls,
                        maiden : statsForMatch.scoreOfBowlersArrayInFirstInnings[i].maiden,
                        runsGiven : statsForMatch.scoreOfBowlersArrayInFirstInnings[i].runs,
                        wickets : statsForMatch.scoreOfBowlersArrayInFirstInnings[i].wickets
                    })
                }
                for(let i=0;i<statsForMatch.scoreOfBowlersArrayInSecondInnings.length;i++){
                    newTestMatchSchema.secondInning.bowling.push({
                        position : i+1,
                        name : statsForMatch.scoreOfBowlersArrayInSecondInnings[i].name,
                        link : statsForMatch.scoreOfBowlersArrayInSecondInnings[i].link,
                        balls : statsForMatch.scoreOfBowlersArrayInSecondInnings[i].balls,
                        maiden : statsForMatch.scoreOfBowlersArrayInSecondInnings[i].maiden,
                        runsGiven : statsForMatch.scoreOfBowlersArrayInSecondInnings[i].runs,
                        wickets : statsForMatch.scoreOfBowlersArrayInSecondInnings[i].wickets
                    })
                }
                for(let i=0;i<statsForMatch.scoreOfBowlersArrayInThirdInnings.length;i++){
                    newTestMatchSchema.thirdInning.bowling.push({
                        position : i+1,
                        name : statsForMatch.scoreOfBowlersArrayInThirdInnings[i].name,
                        link : statsForMatch.scoreOfBowlersArrayInThirdInnings[i].link,
                        balls : statsForMatch.scoreOfBowlersArrayInThirdInnings[i].balls,
                        maiden : statsForMatch.scoreOfBowlersArrayInThirdInnings[i].maiden,
                        runsGiven : statsForMatch.scoreOfBowlersArrayInThirdInnings[i].runs,
                        wickets : statsForMatch.scoreOfBowlersArrayInThirdInnings[i].wickets
                    })
                }
                for(let i=0;i<statsForMatch.scoreOfBowlersArrayInFourthInnings.length;i++){
                    newTestMatchSchema.fourthInning.bowling.push({
                        position : i+1,
                        name : statsForMatch.scoreOfBowlersArrayInFourthInnings[i].name,
                        link : statsForMatch.scoreOfBowlersArrayInFourthInnings[i].link,
                        balls : statsForMatch.scoreOfBowlersArrayInFourthInnings[i].balls,
                        maiden : statsForMatch.scoreOfBowlersArrayInFourthInnings[i].maiden,
                        runsGiven : statsForMatch.scoreOfBowlersArrayInFourthInnings[i].runs,
                        wickets : statsForMatch.scoreOfBowlersArrayInFourthInnings[i].wickets
                    })
                }
                newTestMatchSchema.save(function(err){
                    resolve();
                })
            }
            else{
                resolve();
            }
        })
    })
    //console.log(matchDetails);
}


function addODIMatchesToDatabase(statsForMatch,matchDetails,matchLevel){
    var odiMatchSchema;
    console.log(matchLevel);
    if(matchLevel==="DOM")
    odiMatchSchema=require('./model/dom_odi_match');
    if(matchLevel==="INT")
    odiMatchSchema=require('./model/int_odi_match');
    console.log(matchDetails);
    return new Promise(function(resolve,reject){
        odiMatchSchema.findOne({'matchLink' : matchDetails.matchLink},function(error,matchDetailsReceived){
            if(!matchDetailsReceived){
                var newODIMatchSchema = new odiMatchSchema();
                newODIMatchSchema.matchLink = matchDetails.matchLink;
                newODIMatchSchema.ground = matchDetails.ground;
                newODIMatchSchema.date = matchDetails.date;
                for(let i=0;i<statsForMatch.scoreOfBatsmanArrayInFirstInnings.length;i++){
                    newODIMatchSchema.firstInning.batting.push({
                        position : i+1,
                        name : statsForMatch.scoreOfBatsmanArrayInFirstInnings[i].name,
                        link : statsForMatch.scoreOfBatsmanArrayInFirstInnings[i].link,
                        runs : statsForMatch.scoreOfBatsmanArrayInFirstInnings[i].runs,
                        numberOfBalls : statsForMatch.scoreOfBatsmanArrayInFirstInnings[i].balls,
                        numberOfFours : statsForMatch.scoreOfBatsmanArrayInFirstInnings[i].fours,
                        numberOfSixes : statsForMatch.scoreOfBatsmanArrayInFirstInnings[i].sixes
                    })
                }
                for(let i=0;i<statsForMatch.scoreOfBatsmanArrayInSecondInnings.length;i++){
                    newODIMatchSchema.secondInning.batting.push({
                        position : i+1,
                        name : statsForMatch.scoreOfBatsmanArrayInSecondInnings[i].name,
                        link : statsForMatch.scoreOfBatsmanArrayInSecondInnings[i].link,
                        runs : statsForMatch.scoreOfBatsmanArrayInSecondInnings[i].runs,
                        numberOfBalls : statsForMatch.scoreOfBatsmanArrayInSecondInnings[i].balls,
                        numberOfFours : statsForMatch.scoreOfBatsmanArrayInSecondInnings[i].fours,
                        numberOfSixes : statsForMatch.scoreOfBatsmanArrayInSecondInnings[i].sixes
                    })
                }
                
                for(let i=0;i<statsForMatch.scoreOfBowlersArrayInFirstInnings.length;i++){
                    newODIMatchSchema.firstInning.bowling.push({
                        position : i+1,
                        name : statsForMatch.scoreOfBowlersArrayInFirstInnings[i].name,
                        link : statsForMatch.scoreOfBowlersArrayInFirstInnings[i].link,
                        balls : statsForMatch.scoreOfBowlersArrayInFirstInnings[i].balls,
                        maiden : statsForMatch.scoreOfBowlersArrayInFirstInnings[i].maiden,
                        runsGiven : statsForMatch.scoreOfBowlersArrayInFirstInnings[i].runs,
                        wickets : statsForMatch.scoreOfBowlersArrayInFirstInnings[i].wickets
                    })
                }
                for(let i=0;i<statsForMatch.scoreOfBowlersArrayInSecondInnings.length;i++){
                    newODIMatchSchema.secondInning.bowling.push({
                        position : i+1,
                        name : statsForMatch.scoreOfBowlersArrayInSecondInnings[i].name,
                        link : statsForMatch.scoreOfBowlersArrayInSecondInnings[i].link,
                        balls : statsForMatch.scoreOfBowlersArrayInSecondInnings[i].balls,
                        maiden : statsForMatch.scoreOfBowlersArrayInSecondInnings[i].maiden,
                        runsGiven : statsForMatch.scoreOfBowlersArrayInSecondInnings[i].runs,
                        wickets : statsForMatch.scoreOfBowlersArrayInSecondInnings[i].wickets
                    })
                }
                
                newODIMatchSchema.save(function(err){
                    resolve();
                })
            }
            else{
                resolve();
            }
        })
    })
    //console.log(matchDetails);
}

function addT20MatchesToDatabase(statsForMatch,matchDetails,matchLevel){
    var odiMatchSchema;
    if(matchLevel==="INT")
    odiMatchSchema=require('./model/int_t20_match');
    if(matchLevel==="DOM")
    odiMatchSchema=require('./model/dom_t20_match');
    if(matchLevel==="T20")
    odiMatchSchema=require('./model/league_t20_match');
    return new Promise(function(resolve,reject){
        odiMatchSchema.findOne({'matchLink' : matchDetails.matchLink},function(error,matchDetailsReceived){
            if(!matchDetailsReceived){
                var newODIMatchSchema = new odiMatchSchema();
                newODIMatchSchema.matchLink = matchDetails.matchLink;
                newODIMatchSchema.ground = matchDetails.ground;
                newODIMatchSchema.date = matchDetails.date;
                for(let i=0;i<statsForMatch.scoreOfBatsmanArrayInFirstInnings.length;i++){
                    newODIMatchSchema.firstInning.batting.push({
                        position : i+1,
                        name : statsForMatch.scoreOfBatsmanArrayInFirstInnings[i].name,
                        link : statsForMatch.scoreOfBatsmanArrayInFirstInnings[i].link,
                        runs : statsForMatch.scoreOfBatsmanArrayInFirstInnings[i].runs,
                        numberOfBalls : statsForMatch.scoreOfBatsmanArrayInFirstInnings[i].balls,
                        numberOfFours : statsForMatch.scoreOfBatsmanArrayInFirstInnings[i].fours,
                        numberOfSixes : statsForMatch.scoreOfBatsmanArrayInFirstInnings[i].sixes
                    })
                }
                for(let i=0;i<statsForMatch.scoreOfBatsmanArrayInSecondInnings.length;i++){
                    newODIMatchSchema.secondInning.batting.push({
                        position : i+1,
                        name : statsForMatch.scoreOfBatsmanArrayInSecondInnings[i].name,
                        link : statsForMatch.scoreOfBatsmanArrayInSecondInnings[i].link,
                        runs : statsForMatch.scoreOfBatsmanArrayInSecondInnings[i].runs,
                        numberOfBalls : statsForMatch.scoreOfBatsmanArrayInSecondInnings[i].balls,
                        numberOfFours : statsForMatch.scoreOfBatsmanArrayInSecondInnings[i].fours,
                        numberOfSixes : statsForMatch.scoreOfBatsmanArrayInSecondInnings[i].sixes
                    })
                }
                
                for(let i=0;i<statsForMatch.scoreOfBowlersArrayInFirstInnings.length;i++){
                    newODIMatchSchema.firstInning.bowling.push({
                        position : i+1,
                        name : statsForMatch.scoreOfBowlersArrayInFirstInnings[i].name,
                        link : statsForMatch.scoreOfBowlersArrayInFirstInnings[i].link,
                        balls : statsForMatch.scoreOfBowlersArrayInFirstInnings[i].balls,
                        maiden : statsForMatch.scoreOfBowlersArrayInFirstInnings[i].maiden,
                        runsGiven : statsForMatch.scoreOfBowlersArrayInFirstInnings[i].runs,
                        wickets : statsForMatch.scoreOfBowlersArrayInFirstInnings[i].wickets
                    })
                }
                for(let i=0;i<statsForMatch.scoreOfBowlersArrayInSecondInnings.length;i++){
                    newODIMatchSchema.secondInning.bowling.push({
                        position : i+1,
                        name : statsForMatch.scoreOfBowlersArrayInSecondInnings[i].name,
                        link : statsForMatch.scoreOfBowlersArrayInSecondInnings[i].link,
                        balls : statsForMatch.scoreOfBowlersArrayInSecondInnings[i].balls,
                        maiden : statsForMatch.scoreOfBowlersArrayInSecondInnings[i].maiden,
                        runsGiven : statsForMatch.scoreOfBowlersArrayInSecondInnings[i].runs,
                        wickets : statsForMatch.scoreOfBowlersArrayInSecondInnings[i].wickets
                    })
                }
                
                newODIMatchSchema.save(function(err){
                    resolve();
                })
            }
            else{
                resolve();
            }
        })
    })
    //console.log(matchDetails);
}


//=======================================================//





function convertToNumber(receivedData){
    let toReturnData;
    for(i=0;i<10000;i++){
        let tocheckData=i.toString();
        if(tocheckData===receivedData){
            toReturnData=i;
            break;
        }
    }
    return toReturnData;
}

function findOvers(oversReceived){
    let overs, balls,toReturnBalls;
    if(oversReceived.indexOf('.')>-1){
        let ArrayOfOversandBalls=oversReceived.split('.');
        for(let i=0;i<=1000;i++){
            let tocheckString = i.toString();
            if(tocheckString===ArrayOfOversandBalls[0]){
                overs=i;
                break;
            }
        }
        for(let i=1;i<=6;i++){
            let tocheckString = i.toString();
            if(tocheckString===ArrayOfOversandBalls[1]){
                balls=i;
                break;
            }
        }
        toReturnBalls=(overs*6)+balls;
    }
    else{
        for(let i=1;i<=1000;i++){
            let tocheckString = i.toString();
            if(tocheckString===oversReceived){
                toReturnBalls=i*6;
                break;
            }
        }
    }
    return toReturnBalls;
}

function scrapeScoreCardForTestMatch(elem,matchLink,matchLevel){
    //console.log(matchLink);
    let scoreOfBatsmanArrayInFirstInnings=[],scoreOfBowlersArrayInFirstInnings=[];
    let numberOfChildren=(elem.children().length);
    let numberOfChildrenInFirstInning=(elem.children().eq(1).children().length);
    let inningNumber=elem.children().eq(1).attr('id');
    if(inningNumber==="innings_1"){
        let numberOfBatsmenInFirstInning=(elem.children().eq(1).children().eq(0).children().length)
        //console.log(numberOfBatsmenInFirstInning);
        for(let i=2;i<numberOfBatsmenInFirstInning;i++){
            let scoreOfBatsman = ((elem).children().eq(1).children().eq(0).children().eq(i));
            if(scoreOfBatsman.text().indexOf('Extras')> -1 || scoreOfBatsman.text().indexOf('Total')> -1)
            break;
            scoreOfBatsmanArrayInFirstInnings.push({
                'link' : scoreOfBatsman.children().eq(0).children().eq(0).attr('href'),
                'name' : trimPlayerName(scoreOfBatsman.children().eq(0).text()),
                'runs' : convertToNumber(scoreOfBatsman.children().eq(2).text()),
                'balls' : convertToNumber(scoreOfBatsman.children().eq(3).text()),
                'fours' : convertToNumber(scoreOfBatsman.children().eq(4).text()),
                'sixes' : convertToNumber(scoreOfBatsman.children().eq(5).text())
            })
        }
        let numberOfBowlerInFirstInning=(elem.children().eq(1).children().eq(numberOfChildrenInFirstInning-1).children().length)
        for(let i=1;i<numberOfBowlerInFirstInning;i++){
            let scoreOfBowler=elem.children().eq(1).children().eq(numberOfChildrenInFirstInning-1).children().eq(i);
            scoreOfBowlersArrayInFirstInnings.push({
                'link' : scoreOfBowler.children().eq(0).children().eq(0).attr('href'),
                'name' : trimPlayerName(scoreOfBowler.children().eq(0).text()),
                'balls' : findOvers(scoreOfBowler.children().eq(1).text()),
                'maiden' : convertToNumber(scoreOfBowler.children().eq(2).text()),
                'runs' : convertToNumber(scoreOfBowler.children().eq(3).text()),
                'wickets' : convertToNumber(scoreOfBowler.children().eq(4).text()),
            })
        }
        //console.log(scoreOfBatsmanArrayInFirstInnings);
        //console.log(scoreOfBowlersArrayInFirstInnings);
    }
    //=========SECOND===========//
    let scoreOfBatsmanArrayInSecondInnings=[],scoreOfBowlersArrayInSecondInnings=[];
    numberOfChildren=(elem.children().length);
    let numberOfChildrenInSecondInning=(elem.children().eq(2).children().length);
     inningNumber=elem.children().eq(2).attr('id');
    if(inningNumber==="innings_2" && numberOfChildren>2){
        let numberOfBatsmenInSecondInning=(elem.children().eq(2).children().eq(0).children().length)
        //console.log(numberOfBatsmenInFirstInning);
        for(let i=2;i<numberOfBatsmenInSecondInning;i++){
            let scoreOfBatsman = ((elem).children().eq(2).children().eq(0).children().eq(i));
            if(scoreOfBatsman.text().indexOf('Extras')> -1 || scoreOfBatsman.text().indexOf('Total')> -1)
            break;
            scoreOfBatsmanArrayInSecondInnings.push({
                'link' : scoreOfBatsman.children().eq(0).children().eq(0).attr('href'),
                'name' : trimPlayerName(scoreOfBatsman.children().eq(0).text()),
                'runs' : convertToNumber(scoreOfBatsman.children().eq(2).text()),
                'balls' : convertToNumber(scoreOfBatsman.children().eq(3).text()),
                'fours' : convertToNumber(scoreOfBatsman.children().eq(4).text()),
                'sixes' : convertToNumber(scoreOfBatsman.children().eq(5).text())
            })
        }
        let numberOfBowlerInSecondInning=(elem.children().eq(2).children().eq(numberOfChildrenInSecondInning-1).children().length)
        for(let i=1;i<numberOfBowlerInSecondInning;i++){
            let scoreOfBowler=elem.children().eq(2).children().eq(numberOfChildrenInSecondInning-1).children().eq(i);
            scoreOfBowlersArrayInSecondInnings.push({
                'link' : scoreOfBowler.children().eq(0).children().eq(0).attr('href'),
                'name' : trimPlayerName(scoreOfBowler.children().eq(0).text()),
                'balls' : findOvers(scoreOfBowler.children().eq(1).text()),
                'maiden' : convertToNumber(scoreOfBowler.children().eq(2).text()),
                'runs' : convertToNumber(scoreOfBowler.children().eq(3).text()),
                'wickets' : convertToNumber(scoreOfBowler.children().eq(4).text()),
            })
        }
        //console.log(scoreOfBatsmanArrayInSecondInnings);
        //console.log(scoreOfBowlersArrayInSecondInnings);
    }
    //===========THIRD==========//
    let scoreOfBatsmanArrayInThirdInnings=[],scoreOfBowlersArrayInThirdInnings=[];
    numberOfChildren=(elem.children().length);
    let numberOfChildrenInThirdInning=(elem.children().eq(3).children().length);
     inningNumber=elem.children().eq(3).attr('id');
    if(inningNumber==="innings_3" && numberOfChildren>3){
        let numberOfBatsmenInThirdInning=(elem.children().eq(3).children().eq(0).children().length)
        //console.log(numberOfBatsmenInFirstInning);
        for(let i=2;i<numberOfBatsmenInThirdInning;i++){
            let scoreOfBatsman = ((elem).children().eq(3).children().eq(0).children().eq(i));
            if(scoreOfBatsman.text().indexOf('Extras')> -1 || scoreOfBatsman.text().indexOf('Total')> -1)
            break;
            scoreOfBatsmanArrayInThirdInnings.push({
                'link' : scoreOfBatsman.children().eq(0).children().eq(0).attr('href'),
                'name' : trimPlayerName(scoreOfBatsman.children().eq(0).text()),
                'runs' : convertToNumber(scoreOfBatsman.children().eq(2).text()),
                'balls' : convertToNumber(scoreOfBatsman.children().eq(3).text()),
                'fours' : convertToNumber(scoreOfBatsman.children().eq(4).text()),
                'sixes' : convertToNumber(scoreOfBatsman.children().eq(5).text())
            })
        }
        let numberOfBowlerInThirdInning=(elem.children().eq(3).children().eq(numberOfChildrenInThirdInning-1).children().length)
        for(let i=1;i<numberOfBowlerInThirdInning;i++){
            let scoreOfBowler=elem.children().eq(3).children().eq(numberOfChildrenInThirdInning-1).children().eq(i);
            scoreOfBowlersArrayInThirdInnings.push({
                'link' : scoreOfBowler.children().eq(0).children().eq(0).attr('href'),
                'name' : trimPlayerName(scoreOfBowler.children().eq(0).text()),
                'balls' : findOvers(scoreOfBowler.children().eq(1).text()),
                'maiden' : convertToNumber(scoreOfBowler.children().eq(2).text()),
                'runs' : convertToNumber(scoreOfBowler.children().eq(3).text()),
                'wickets' : convertToNumber(scoreOfBowler.children().eq(4).text()),
            })
        }
        //console.log(scoreOfBatsmanArrayInThirdInnings);
        //console.log(scoreOfBowlersArrayInThirdInnings);
    } 
    //==========FOURTH===========//
    let scoreOfBatsmanArrayInFourthInnings=[],scoreOfBowlersArrayInFourthInnings=[];
    numberOfChildren=(elem.children().length);
    let numberOfChildrenInFourthInning=(elem.children().eq(4).children().length);
    inningNumber=elem.children().eq(4).attr('id');
    if(inningNumber==="innings_4" && numberOfChildren>4){
        let numberOfBatsmenInFourthInning=(elem.children().eq(4).children().eq(0).children().length)
        //console.log(numberOfBatsmenInFirstInning);
        for(let i=2;i<numberOfBatsmenInFourthInning;i++){
            let scoreOfBatsman = ((elem).children().eq(4).children().eq(0).children().eq(i));
            if(scoreOfBatsman.text().indexOf('Extras')> -1 || scoreOfBatsman.text().indexOf('Total')> -1)
            break;
            scoreOfBatsmanArrayInFourthInnings.push({
                'link' : scoreOfBatsman.children().eq(0).children().eq(0).attr('href'),
                'name' : trimPlayerName(scoreOfBatsman.children().eq(0).text()),
                'runs' : convertToNumber(scoreOfBatsman.children().eq(2).text()),
                'balls' : convertToNumber(scoreOfBatsman.children().eq(3).text()),
                'fours' : convertToNumber(scoreOfBatsman.children().eq(4).text()),
                'sixes' : convertToNumber(scoreOfBatsman.children().eq(5).text())
            })
        }
        let numberOfBowlerInFourthInning=(elem.children().eq(4).children().eq(numberOfChildrenInFourthInning-1).children().length)
        for(let i=1;i<numberOfBowlerInFourthInning;i++){
            let scoreOfBowler=elem.children().eq(4).children().eq(numberOfChildrenInFourthInning-1).children().eq(i);
            scoreOfBowlersArrayInFourthInnings.push({
                'link' : scoreOfBowler.children().eq(0).children().eq(0).attr('href'),
                'name' : trimPlayerName(scoreOfBowler.children().eq(0).text()),
                'balls' : findOvers(scoreOfBowler.children().eq(1).text()),
                'maiden' : convertToNumber(scoreOfBowler.children().eq(2).text()),
                'runs' : convertToNumber(scoreOfBowler.children().eq(3).text()),
                'wickets' : convertToNumber(scoreOfBowler.children().eq(4).text()),
            })
        }
        //console.log(scoreOfBatsmanArrayInFourthInnings);
        //console.log(scoreOfBowlersArrayInFourthInnings);
    }
    let statsForCurrentMatch = {
        'scoreOfBatsmanArrayInFourthInnings' : scoreOfBatsmanArrayInFourthInnings,
        'scoreOfBowlersArrayInFourthInnings' : scoreOfBowlersArrayInFourthInnings,
        'scoreOfBowlersArrayInThirdInnings' : scoreOfBowlersArrayInThirdInnings,
        'scoreOfBatsmanArrayInThirdInnings' : scoreOfBatsmanArrayInThirdInnings,
        'scoreOfBowlersArrayInSecondInnings' : scoreOfBowlersArrayInSecondInnings,
        'scoreOfBatsmanArrayInSecondInnings' : scoreOfBatsmanArrayInSecondInnings,
        'scoreOfBatsmanArrayInFirstInnings' : scoreOfBatsmanArrayInFirstInnings,
        'scoreOfBowlersArrayInFirstInnings' : scoreOfBowlersArrayInFirstInnings
    }
    addTestMatchesToDatabase(statsForCurrentMatch,matchLink,matchLevel)
    .then(function(){
        console.log("Test Match Added :  "+matchLink.matchLink);
    })
}

function scrapeScoreCardForT20Match(elem,matchLink,matchLevel){
    //console.log(matchLink);
    let scoreOfBatsmanArrayInFirstInnings=[],scoreOfBowlersArrayInFirstInnings=[];
    let numberOfChildren=(elem.children().length);
    let numberOfChildrenInFirstInning=(elem.children().eq(1).children().length);
    let numberOfBatsmenInFirstInning=(elem.children().eq(1).children().eq(0).children().length)
    //console.log(numberOfBatsmenInFirstInning);
    for(let i=2;i<numberOfBatsmenInFirstInning;i++){
        let scoreOfBatsman = ((elem).children().eq(1).children().eq(0).children().eq(i));
        if(scoreOfBatsman.text().indexOf('Extras')> -1 || scoreOfBatsman.text().indexOf('Total')> -1)
        break;
        scoreOfBatsmanArrayInFirstInnings.push({
            'link' : scoreOfBatsman.children().eq(0).children().eq(0).attr('href'),
            'name' : trimPlayerName(scoreOfBatsman.children().eq(0).text()),
            'runs' : convertToNumber(scoreOfBatsman.children().eq(2).text()),
            'balls' : convertToNumber(scoreOfBatsman.children().eq(3).text()),
            'fours' : convertToNumber(scoreOfBatsman.children().eq(4).text()),
            'sixes' : convertToNumber(scoreOfBatsman.children().eq(5).text())
        })
    }
    let numberOfBowlerInFirstInning=(elem.children().eq(1).children().eq(numberOfChildrenInFirstInning-1).children().length)
    for(let i=1;i<numberOfBowlerInFirstInning;i++){
        let scoreOfBowler=elem.children().eq(1).children().eq(numberOfChildrenInFirstInning-1).children().eq(i);
        scoreOfBowlersArrayInFirstInnings.push({
            'link' : scoreOfBowler.children().eq(0).children().eq(0).attr('href'),
            'name' : trimPlayerName(scoreOfBowler.children().eq(0).text()),
            'balls' : findOvers(scoreOfBowler.children().eq(1).text()),
            'maiden' : convertToNumber(scoreOfBowler.children().eq(2).text()),
            'runs' : convertToNumber(scoreOfBowler.children().eq(3).text()),
            'wickets' : convertToNumber(scoreOfBowler.children().eq(4).text()),
        })
    }
    //console.log(scoreOfBatsmanArrayInFirstInnings);
    //console.log(scoreOfBowlersArrayInFirstInnings);
    //console.log(elem.children().eq(2).text());
    //================SECOND==============//
    let scoreOfBatsmanArrayInSecondInnings=[],scoreOfBowlersArrayInSecondInnings=[];
    numberOfChildren=(elem.children().length);
    let numberOfChildrenInSecondInning=(elem.children().eq(2).children().length);
    let numberOfBatsmenInSecondInning=(elem.children().eq(2).children().eq(0).children().length)
    //console.log(numberOfBatsmenInFirstInning);
    for(let i=2;i<numberOfBatsmenInSecondInning;i++){
        let scoreOfBatsman = ((elem).children().eq(2).children().eq(0).children().eq(i));
        if(scoreOfBatsman.text().indexOf('Extras')> -1 || scoreOfBatsman.text().indexOf('Total')> -1)
        break;
        scoreOfBatsmanArrayInSecondInnings.push({
            'link' : scoreOfBatsman.children().eq(0).children().eq(0).attr('href'),
            'name' : trimPlayerName(scoreOfBatsman.children().eq(0).text()),
            'runs' : convertToNumber(scoreOfBatsman.children().eq(2).text()),
            'balls' : convertToNumber(scoreOfBatsman.children().eq(3).text()),
            'fours' : convertToNumber(scoreOfBatsman.children().eq(4).text()),
            'sixes' : convertToNumber(scoreOfBatsman.children().eq(5).text())
        })
    }
    let numberOfBowlerInSecondInning=(elem.children().eq(2).children().eq(numberOfChildrenInSecondInning-1).children().length)
    for(let i=1;i<numberOfBowlerInSecondInning;i++){
        let scoreOfBowler=elem.children().eq(2).children().eq(numberOfChildrenInSecondInning-1).children().eq(i);
        scoreOfBowlersArrayInSecondInnings.push({
            'link' : scoreOfBowler.children().eq(0).children().eq(0).attr('href'),
            'name' : trimPlayerName(scoreOfBowler.children().eq(0).text()),
            'balls' : findOvers(scoreOfBowler.children().eq(1).text()),
            'maiden' : convertToNumber(scoreOfBowler.children().eq(2).text()),
            'runs' : convertToNumber(scoreOfBowler.children().eq(3).text()),
            'wickets' : convertToNumber(scoreOfBowler.children().eq(4).text()),
        })
    }

    //console.log(scoreOfBatsmanArrayInSecondInnings);
    //console.log(scoreOfBowlersArrayInSecondInnings);
    
    let statsForCurrentMatch = {
        'scoreOfBowlersArrayInSecondInnings' : scoreOfBowlersArrayInSecondInnings,
        'scoreOfBatsmanArrayInSecondInnings' : scoreOfBatsmanArrayInSecondInnings,
        'scoreOfBatsmanArrayInFirstInnings' : scoreOfBatsmanArrayInFirstInnings,
        'scoreOfBowlersArrayInFirstInnings' : scoreOfBowlersArrayInFirstInnings
    }
    addT20MatchesToDatabase(statsForCurrentMatch,matchLink,matchLevel)
    .then(function(){
        console.log("T20 Match Added :  "+matchLink.matchLink);
    })
}

function scrapeScoreCardForODIMatch(elem,matchLink,matchLevel){
    //console.log(matchLink);
    let scoreOfBatsmanArrayInFirstInnings=[],scoreOfBowlersArrayInFirstInnings=[];
    let numberOfChildren=(elem.children().length);
    let numberOfChildrenInFirstInning=(elem.children().eq(1).children().length);
    let numberOfBatsmenInFirstInning=(elem.children().eq(1).children().eq(0).children().length)
    //console.log(numberOfBatsmenInFirstInning);
    for(let i=2;i<numberOfBatsmenInFirstInning;i++){
        let scoreOfBatsman = ((elem).children().eq(1).children().eq(0).children().eq(i));
        if(scoreOfBatsman.text().indexOf('Extras')> -1 || scoreOfBatsman.text().indexOf('Total')> -1)
        break;
        scoreOfBatsmanArrayInFirstInnings.push({
            'link' : scoreOfBatsman.children().eq(0).children().eq(0).attr('href'),
            'name' : trimPlayerName(scoreOfBatsman.children().eq(0).text()),
            'runs' : convertToNumber(scoreOfBatsman.children().eq(2).text()),
            'balls' : convertToNumber(scoreOfBatsman.children().eq(3).text()),
            'fours' : convertToNumber(scoreOfBatsman.children().eq(4).text()),
            'sixes' : convertToNumber(scoreOfBatsman.children().eq(5).text())
        })
    }
    let numberOfBowlerInFirstInning=(elem.children().eq(1).children().eq(numberOfChildrenInFirstInning-1).children().length)
    for(let i=1;i<numberOfBowlerInFirstInning;i++){
        let scoreOfBowler=elem.children().eq(1).children().eq(numberOfChildrenInFirstInning-1).children().eq(i);
        scoreOfBowlersArrayInFirstInnings.push({
            'link' : scoreOfBowler.children().eq(0).children().eq(0).attr('href'),
            'name' : trimPlayerName(scoreOfBowler.children().eq(0).text()),
            'balls' : findOvers(scoreOfBowler.children().eq(1).text()),
            'maiden' : convertToNumber(scoreOfBowler.children().eq(2).text()),
            'runs' : convertToNumber(scoreOfBowler.children().eq(3).text()),
            'wickets' : convertToNumber(scoreOfBowler.children().eq(4).text()),
        })
    }
    //console.log(scoreOfBatsmanArrayInFirstInnings);
    //console.log(scoreOfBowlersArrayInFirstInnings);
    //console.log(elem.children().eq(2).text());
    //================SECOND==============//
    let scoreOfBatsmanArrayInSecondInnings=[],scoreOfBowlersArrayInSecondInnings=[];
    numberOfChildren=(elem.children().length);
    let numberOfChildrenInSecondInning=(elem.children().eq(2).children().length);
    let numberOfBatsmenInSecondInning=(elem.children().eq(2).children().eq(0).children().length)
    //console.log(numberOfBatsmenInFirstInning);
    for(let i=2;i<numberOfBatsmenInSecondInning;i++){
        let scoreOfBatsman = ((elem).children().eq(2).children().eq(0).children().eq(i));
        if(scoreOfBatsman.text().indexOf('Extras')> -1 || scoreOfBatsman.text().indexOf('Total')> -1)
        break;
        scoreOfBatsmanArrayInSecondInnings.push({
            'link' : scoreOfBatsman.children().eq(0).children().eq(0).attr('href'),
            'name' : trimPlayerName(scoreOfBatsman.children().eq(0).text()),
            'runs' : convertToNumber(scoreOfBatsman.children().eq(2).text()),
            'balls' : convertToNumber(scoreOfBatsman.children().eq(3).text()),
            'fours' : convertToNumber(scoreOfBatsman.children().eq(4).text()),
            'sixes' : convertToNumber(scoreOfBatsman.children().eq(5).text())
        })
    }
    let numberOfBowlerInSecondInning=(elem.children().eq(2).children().eq(numberOfChildrenInSecondInning-1).children().length)
    for(let i=1;i<numberOfBowlerInSecondInning;i++){
        let scoreOfBowler=elem.children().eq(2).children().eq(numberOfChildrenInSecondInning-1).children().eq(i);
        scoreOfBowlersArrayInSecondInnings.push({
            'link' : scoreOfBowler.children().eq(0).children().eq(0).attr('href'),
            'name' : trimPlayerName(scoreOfBowler.children().eq(0).text()),
            'balls' : findOvers(scoreOfBowler.children().eq(1).text()),
            'maiden' : convertToNumber(scoreOfBowler.children().eq(2).text()),
            'runs' : convertToNumber(scoreOfBowler.children().eq(3).text()),
            'wickets' : convertToNumber(scoreOfBowler.children().eq(4).text()),
        })
    }

    //console.log(scoreOfBatsmanArrayInSecondInnings);
    //console.log(scoreOfBowlersArrayInSecondInnings);

    let statsForCurrentMatch = {
        'scoreOfBowlersArrayInSecondInnings' : scoreOfBowlersArrayInSecondInnings,
        'scoreOfBatsmanArrayInSecondInnings' : scoreOfBatsmanArrayInSecondInnings,
        'scoreOfBatsmanArrayInFirstInnings' : scoreOfBatsmanArrayInFirstInnings,
        'scoreOfBowlersArrayInFirstInnings' : scoreOfBowlersArrayInFirstInnings
    }
    addODIMatchesToDatabase(statsForCurrentMatch,matchLink,matchLevel)
    .then(function(){
        console.log("ODI Match Added : "+matchLink.matchLink);
    })

}
function findMatchType(matchType,matchTypeReceived){
    let numberOfTypesPossible = 0,matchTypeToReturn;
    //console.log("matchType : "+matchType);
    //console.log("matchTypeReceived : "+matchTypeReceived);
    if(matchType.indexOf('Test')>-1){
        numberOfTypesPossible++;
        matchTypeToReturn="Test";
    }
    if(matchType.indexOf('ODI')>-1){
        numberOfTypesPossible++;
        matchTypeToReturn="ODI";
    }
    if(matchType.indexOf('T20')>-1){
        numberOfTypesPossible++;
        matchTypeToReturn="T20";
    }
    if(numberOfTypesPossible===0){
        if(matchTypeReceived.indexOf('Test')>-1)
        matchTypeToReturn="Test";
        else{
            if(matchTypeReceived.indexOf('ODI')>-1)
            matchTypeToReturn="ODI";
            else
            if(matchTypeReceived.indexOf('T20')>-1)
            matchTypeToReturn="T20";
        }
    }
    return matchTypeToReturn;
}

function trimPlayerName(playerName){
    let playerNameToReturn=playerName;
    if(playerName.indexOf('(')>-1){
        playerNameToReturn=playerName.substr(0,playerName.indexOf('('));
    }
    playerNameToReturn=playerNameToReturn.trim();
    console.log("Player name : "+playerNameToReturn);
    return playerNameToReturn;
}

function getDate(dateOfMatch){
    let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    let matchMonth,matchDate,matchYear;
    for(let i=0;i<12;i++){
        if(dateOfMatch.indexOf(months[i])>-1){
            matchMonth=i+1;
            break;
        }
    }
    for(let i=0;i<12;i++){
        for(let j=1;j<32;j++){
            let tocheck;
            if(j>9)
            tocheck = months[i] + " " + (j.toString());
            else
            tocheck = months[i] + " 0" + (j.toString());
            //console.log("To check  : " +tocheck);
            if(dateOfMatch.indexOf(tocheck)>-1){
                matchDate=j;
                break;
            }
        }
    }
    //console.log(matchDate + " "+matchMonth);
    let dateToReturn;
    for(let i=2010;i<=2020;i++){
        let year=(i).toString();
        if(dateOfMatch.indexOf(year)>-1){
            dateToReturn=year;
            break;  
        }
    }
    if(matchMonth<10)
    dateToReturn=dateToReturn+"0"+matchMonth.toString();
    else
    dateToReturn=dateToReturn+matchMonth.toString();
    if(matchDate<10)
    dateToReturn=dateToReturn+"0"+matchDate.toString();
    else
    dateToReturn=dateToReturn+matchDate.toString();
    return dateToReturn;
    //console.log(dateToReturn);
}

var teamsArray = [];

function scrapeScoreCard(element,matchTypeReceived,matchLevel){
    //console.log("scrapeScoreCard");

    return new Promise(function(resolve,reject){
        //console.log(element);
        axios.get("https://www.cricbuzz.com"+element).then(function(response){
            let $ = cheerio.load(response.data);
            let numberOfMatches=-1,index=0,promiseFulfilled=false;
            //console.log(element);
            function innerPromise(){
                return new Promise(function(res,rej){
                    $('.cb-scrd-lft-col').each(function(i,elem){
                        numberOfMatches = $(elem).children().length;
                        let completeDetailsOfMatch=($(elem).text());
                        let groundName = $(elem).children().eq(numberOfMatches-1).children().eq(1).children().eq(4).children().eq(1).text();
                        let matchType = $(elem).children().eq(numberOfMatches-1).children().eq(1).children().eq(0).children().eq(1).text();
                        if(completeDetailsOfMatch.indexOf('No result')> -1 || completeDetailsOfMatch.indexOf('abandoned')> -1 || matchType.indexOf('ractice') >-1 )
                        console.log("No need to scrape this one");
                        else{
                            let matchInfoLength = $(elem).children().eq(numberOfMatches-1).children().eq(1).children().length;
                            let matchInfoPlayingXI_2 = $(elem).children().eq(numberOfMatches-1).children().eq(1).children().eq(matchInfoLength-2).children().eq(1).text();
                            let matchInfoPlayingXI_1 = $(elem).children().eq(numberOfMatches-1).children().eq(1).children().eq(matchInfoLength-5).children().eq(1).text();
                            let dateOfMatch = $(elem).children().eq(numberOfMatches-1).children().eq(1).children().eq(1).children().eq(1).text();
                            //console.log(groundName);
                            matchType=findMatchType(matchType,matchTypeReceived);
                            
                            //console.log("Type of match : "+matchType);
                            //console.log("Date : "+dateOfMatch);
                            dateOfMatch=getDate(dateOfMatch);
                            console.log(dateOfMatch);
                            let matchDetails = {
                                'matchLink' : element,
                                'ground' : groundName,
                                'date' : dateOfMatch
                            };
                            let squad = $(elem).children().eq(numberOfMatches-1).text();
                            let secondPlayingXIWithLinks=[],firstPlayingXIWithLinks=[];
                            for(let i=0;i<11;i++){
                                let linkOfPlayer = $(elem).children().eq(numberOfMatches-1).children().eq(1).children().eq(matchInfoLength-2).children().eq(1).children().eq(i).attr('href');
                                let playerName = $(elem).children().eq(numberOfMatches-1).children().eq(1).children().eq(matchInfoLength-2).children().eq(1).children().eq(i).text();
                                if(playerName.indexOf('(')>-1)
                                playerName=playerName.substr(0,playerName.indexOf('('));
                                secondPlayingXIWithLinks.push({'link' : linkOfPlayer,'player' : playerName});
                            }
                            for(let i=0;i<11;i++){
                                let linkOfPlayer = $(elem).children().eq(numberOfMatches-1).children().eq(1).children().eq(matchInfoLength-5).children().eq(1).children().eq(i).attr('href');
                                let playerName = $(elem).children().eq(numberOfMatches-1).children().eq(1).children().eq(matchInfoLength-5).children().eq(1).children().eq(i).text();
                                if(playerName.indexOf('(')>-1)
                                playerName=playerName.substr(0,playerName.indexOf('('));
                                firstPlayingXIWithLinks.push({'link' : linkOfPlayer,'player' : playerName});
                            }
                            let scoreOfBatsmanArray=[];
                            //console.log(firstPlayingXIWithLinks);
                            //console.log(secondPlayingXIWithLinks);
                            /*let numberOfBatsmenInSecondInning=$(elem).children().eq(numberOfMatches-2).children().eq(0).children().length;
                            //console.log("Number of Batsmen : "+numberOfBatsmenInSecondInning);
                            for(let i=2;i<numberOfBatsmenInSecondInning;i++){
                                let scoreOfBatsman = ($(elem).children().eq(numberOfMatches-2).children().eq(0).children().eq(i));
                                if(scoreOfBatsman.text().indexOf('Extras')> -1)
                                break;
                                scoreOfBatsmanArray.push({
                                    'link' : scoreOfBatsman.children().eq(0).children().eq(0).attr('href'),
                                    'name' : scoreOfBatsman.children().eq(0).text(),
                                    'runs' : scoreOfBatsman.children().eq(2).text(),
                                    'balls' : scoreOfBatsman.children().eq(3).text(),
                                    'fours' : scoreOfBatsman.children().eq(4).text(),
                                    'sixes' : scoreOfBatsman.children().eq(5).text()
                                })
                                //console.log(scoreOfBatsman.children().eq(0).text()+"\t\t"+scoreOfBatsman.children().eq(2).text()+"\t\t"+scoreOfBatsman.children().eq(3).text()+"\t\t"+scoreOfBatsman.children().eq(4).text()+"\t\t"+scoreOfBatsman.children().eq(5).text()+"\t\t");
                            }
                            console.log(scoreOfBatsmanArray);*/
                            //if(matchType==="ODI")
                            //scrapeScoreCardForODIMatch($(elem));
                            if(matchType==="Test")
                            scrapeScoreCardForTestMatch($(elem),matchDetails,matchLevel);
                            if(matchType==="T20")
                            scrapeScoreCardForT20Match($(elem),matchDetails,matchLevel);
                            if(matchType==="ODI")
                            scrapeScoreCardForODIMatch($(elem),matchDetails,matchLevel);
                        }
                        index++;
                    });
                    numberOfMatches=index;
                    if(numberOfMatches!==index){
                        rej();
                    }
                    else{
                        promiseFulfilled=true;
                        res();
                    }
                });
            }
            innerPromise().then(() => {
                //console.log(error);
            
            if(promiseFulfilled===true){
                //console.log("Resolved outer");
                //timeToScrapeScorecard(matchesLink);
                resolve();
            }
            else{
                //console.log("Not Resolved Outer");
                reject();
            }
            })
        })
        //console.log("Hello");
    });    
}

function timeToScrapeScorecard(myArray,match,matchLevel){
    console.log("This is my Array");
    console.log(myArray);
    //console.log(myArray.length);
    if(myArray.length===0){
        return new Promise(function(resolve,reject){
            resolve();
        })
    }
    else{
        let index = 0,lengthOfArray = myArray.length,promiseFulfilled=false;
    return new Promise(function(resolve,reject){
        
        function innerPromise(){
            return new Promise(function(res,rej){
                if (myArray.length > 0) {
                    let loop = function(data, i) {
                            if (i < data.length) {
                                //console.log("Data : "+data[i]+"   :  "+i)
                                scrapeScoreCard(data[i],match,matchLevel)
                                .then(function(){
                                    //console.log("We are in the then timeToScrapeScorecard");
                                    index++;
                                    loop(myArray, i+1);
                                })
                                .catch(error =>{
                                    console.log(error);
                                })
                            }
                            else{
                                promiseFulfilled=true;
                                resolve();
                            }
                            
                    };
                    loop(myArray, 0);
                }
            })
        }
        innerPromise().then(function(){
            if(promiseFulfilled===true){
                console.log("Yeh toh  ho  raha hai!");
                resolve();
            }
            else
            reject();
        })
        .catch(error =>{
            console.log(error);
            reject();
        })
        
    })
    
    }
    
}

function getScoreCardLink(scoreCardURL){
    if(scoreCardURL.charAt(1)==='l'){
      return  "/live-cricket-scorecard"+scoreCardURL.substr(20);
    }
    else
    return  "/live-cricket-scorecard"+scoreCardURL.substr(15);

}

function scrapeMatches(element,matchLevel){
    let promises = [];
    var matchesLink=[];
    let typeOfMatch;
        console.log(element);
    
        return new Promise(function(resolve,reject){
            let promiseFulfilled = false;
            axios.get("https://www.cricbuzz.com"+element).then(function(response){
                let $ = cheerio.load(response.data);
                let numberOfMatches=-1,index=0;
                //console.log(element);
                function innerPromise(){
                    return new Promise(function(res,rej){
                        typeOfMatch = $('.cb-nav-main').children().eq(1).text();
                        console.log("Type of match : "+typeOfMatch);
                        $('.cb-series-matches').each(function(i,elem){
                            numberOfMatches = $(elem).children().length;
                            index++;
                            teams = $(elem).children().eq(2).children().eq(0).children().eq(0).attr('href');
                            let lengthOfChildrenInnerDiv =  $(elem).children().eq(2).children().eq(0).children().length;
                            if(lengthOfChildrenInnerDiv === 3){
                                let statusOfMatch = $(elem).children().eq(2).children().eq(0).children().eq(2).attr('class');
                                if(statusOfMatch==='cb-text-complete'){
                                    console.log("This is working!");
                                    matchesLink.push(getScoreCardLink(teams));
                                }
                                else
                                console.log("Match in Progress!");
                            }
                            else
                            console.log("Match not started yet!");
                            //matchesLink.push("/live-cricket-scorecard"+teams.substr(15));
                            
                            //console.log("Teams  "+teams);
                            //console.log(numberOfMatches-5);
                        });
                        numberOfMatches=index;
                        console.log("Index  "+index + "   Matches : "+numberOfMatches);
                        if(numberOfMatches!==index){
                            console.log("Not Resolved inner");
                            rej();
                        }
                        else{
                            //console.log("Resolved Inner");
                            promiseFulfilled=true;
                            res();
                        }
                    });
                }
                innerPromise().then(function(){
                    timeToScrapeScorecard(matchesLink,typeOfMatch,matchLevel)
                    .then(function(){
                        if(promiseFulfilled===true)
                        resolve();
                        else
                        reject();
                    })
                    .catch(function(error){
                        console.log(error);
                    })
                })
                .catch(error => {
                    //console.log(error);
                })
            })        
            
            
            
        });
}
var url = "https://www.cricbuzz.com/cricket-scorecard-archives/2014";
var answer=[];
axios.get(url).then(function(response){
    let $ = cheerio.load(response.data);
    //var $ = cheerio.load(html);

        $('.cb-col-84').each(function(i,elem){
            //console.log("Category "+i);
            //console.log();
            var numberOfSeries = $(elem).children().length;
            //console.log(numberOfSeries);
            for(var index = numberOfSeries-1;index>=0;index--){
                //console.log($(elem).children().eq(index).text());
                let matchLevel;
                if(i==0)
                matchLevel="INT";
                if(i==1)
                matchLevel="T20";
                if(i==2)
                matchLevel="DOM";
                answer.push({
                    'seriesLink' : ($(elem).children().eq(index).children().eq(0).attr('href')),
                    'type' : matchLevel
                })
                //answer.push($(elem).children().eq(index).children().eq(0).attr('href'));
                //console.log();
            }
            //console.log();
        });
        return answer;
})
.then(function(answer){
    console.log(answer);
    let index = 0,lengthOfArray = answer.length,promiseFulfilled=false;
    return new Promise(function(resolve,reject){
        
        function innerPromise(){
            return new Promise(function(res,rej){
                if (answer.length > 0) {
                    let loop = function(data, i) {
                            if (i < data.length) {
                                console.log("Data : "+data[i]+"   :  "+i)
                                scrapeMatches(data[i].seriesLink,data[i].type)
                                .then(function(){
                                    //console.log("We are in the then blaaaa");
                                    index++;
                                    loop(answer, i+1);
                                })
                                .catch(error =>{
                                    console.log(error);
                                })
                            }
                    };
                    loop(answer, 0);
                }
                if(index===lengthOfArray){
                    promiseFulfilled=true;
                    //console.log("Yaha resolve ho gaya hai!");
                    res();
                }
                else
                rej();
            })
        }
        innerPromise().then(function(){
            if(promiseFulfilled===true)
            resolve();
            else
            reject();
        })
        .catch(error =>{
            console.log(error);
        })
        
    })
})


//console.log(answer.length);

