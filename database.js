require('dotenv').config();
const mongoose=require('mongoose');
function connectDB() {
    mongoose.connect(process.env.MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true});
    const connection=mongoose.connection;
    connection.once('open', () => {
        console.log('Connection established successfully');
    })
 }
module.exports=connectDB;
