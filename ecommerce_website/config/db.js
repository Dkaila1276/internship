const mongoose = require('mongoose')
const config = require('./config.env')

mongoose.connect(config.MongoDB_URI,{ useNewUrlParser: true,useUnifiedTopology:true },function(err){
    if(err) console.log(err);
    console.log("database is connected");
});
