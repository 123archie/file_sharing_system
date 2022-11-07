const express = require("express");
const cors=require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5500;
const connectDB = require("./database");
const methods = require("methods");
// const { Router } = require("express");
// const methods = require("methods");
app.set("./views", path.join(__dirname, "/views"));
app.set("view engine");
app.use("/api/file_sharing", require("./routes/files"));
// app.use("/api/file_sharing", require("./routes/download"));
app.use(function(req, resp, next){
  // resp.methods("Access-Control-Allow-Methods", "POST");
  resp.header("Access-Control-Allow-Origin", "*");
  resp.header("Access-Control-Allow-Headers", "*");
  next();
  
 });
app.use("/file/download", require("./routes/downloadlink"));
connectDB();
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
