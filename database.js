require('dotenv').config();
const mongoose=require('mongoose');
function connectDB() {
    //Database Connection
    mongoose.connect(process.env.MONGOURL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify:true});
    const connection=mongoose.connection;
    connection.once('open', ()=>{
        console.log("Connection established successfully");
    }).catch(err =>{
        console.log("Connection failed");
    })
}
module.exports=connectDB;
