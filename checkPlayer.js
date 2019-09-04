let mongoose = require('mongoose');
let urlOfDatabase = 'mongodb://127.0.0.1:27017/cricstats';

mongoose.connect(urlOfDatabase);

let odiMatchINT = require('./model/league_t20_match');
let playerLink = '/profiles/7958/chris-cooke';
odiMatchINT.find({},function(err,data){
    //console.log(data);
    let dataArray = [];
    for(let i=0;i<data.length;i++){
        let currentData = data[i];
        let firstInningBattingLength = currentData.firstInning.batting.length;
        for(let j=0;j<firstInningBattingLength;j++){
            //let playerLink = currentData.firstInning.batting[j].position;
            if(currentData.firstInning.batting[j].link === playerLink){
                dataArray.push({
                    'runs' : currentData.firstInning.batting[j].runs,
                    'date' : currentData.date
                })
            }
        }
    }
    for(let i=0;i<data.length;i++){
        let currentData = data[i];
        let firstInningBattingLength = currentData.secondInning.batting.length;
        for(let j=0;j<firstInningBattingLength;j++){
            //let playerLink = currentData.secondInning.batting[j].position;
            if(currentData.secondInning.batting[j].link === playerLink){
                dataArray.push({
                    'runs' : currentData.secondInning.batting[j].runs,
                    'date' : currentData.date
                })
            }
        }
    }
    dataArray.sort(function(a, b) {
        var nameA = a.date.toUpperCase(); // ignore upper and lowercase
        var nameB = b.date.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      });
    console.log(dataArray);
})