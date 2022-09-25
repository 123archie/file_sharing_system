const express=require("express");
const app=express();
const PORT=process.env.PORT || 5500;
app.listen(PORT, function(e){
    console.log(`Listening to port ${PORT}`);
})