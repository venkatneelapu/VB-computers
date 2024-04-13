const mongoose = require('mongoose');

exports.connectdb = async() =>{
    
    mongoose.connect("mongodb+srv://venkatnaidu:venkat2005@cluster0.bpjgtmw.mongodb.net/logiproject", {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        // useCreateIndex:true
    }).then(() =>{
        console.log("database connection successful");
    }).catch((err) =>{
        console.log(`no connection: ${err.message}`);
    })
}