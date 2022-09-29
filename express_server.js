const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const connectDB = require("./database");
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});



// const mongoose=require('mongoose');
// console.log(PORT);

// mongoose.connect(process.env.MONGOURL
//     ).then(result=>{
//         app.listen(PORT);
//             console.log(`Listening to port ${PORT}`);
//     })
//     .catch(err=>{
//         console.log(err);
//     })
