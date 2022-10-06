const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5500;
const connectDB = require("./database");
app.use('/api/file_sharing', require('./routes/files'));
app.use('/files', require('./routes/download'));
connectDB();
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});




