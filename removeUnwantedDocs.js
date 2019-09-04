let mongooese = require('mongoose');

var urlOfDatabase = 'mongodb://127.0.0.1:27017/cricstats';
mongooese.connect(urlOfDatabase);

let odimatchINT = require('./model/league_t20_match');

odimatchINT.remove({date : {$regex : 'und'}},function(error,data){
    console.log(data);
})