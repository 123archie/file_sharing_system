const mongoose=require('mongoose');
const ServerApiVersion='4.4.1';
const dotenv = require('dotenv');
dotenv.config();
function connectDB(){
  const val=mongoose.connect(process.env.MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  console.log("val: "+val);
  const connection=mongoose.connection;  
  connection.once('open', ()=>{
    console.log("Connection established successfully");
  }).catch(err=>{
    console.log("Connection failed");
  })
module.exports=connectDB;}
