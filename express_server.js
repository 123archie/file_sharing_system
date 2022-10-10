const express = require('express');
const dotenv = require('dotenv');
const path=require('path')
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5500;
const connectDB = require("./database");
app.set('./views', path.join(__dirname, '/views'))
app.set('view engine')
app.use('/api/file_sharing', require('./routes/files'));
connectDB();
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});




