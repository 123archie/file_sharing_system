const express=require("express");
const connectDB = require("./database/database");
const app=express();
const PORT=process.env.PORT || 5500;
connectDB();
app.listen(PORT, function(){
    console.log(`Listening to port ${PORT}`);
});
