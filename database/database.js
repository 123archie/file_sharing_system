require('dotenv').config();
const { errorMonitor } = require('events');
const mongoose=require("mongoose")
function connectDB(){
    mongoose.connect(process.env.MONGOURL, { useNewUrlParser : true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: true, });
    const connection=mongoose.connection;
    connection.once('open', ()=>{
    console.log("Connection established successfully")
   });
  }    
module.exports=connectDB;