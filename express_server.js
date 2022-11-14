var express = require("express");
var cors=require("cors");
const dotenv = require("dotenv");
const path = require("path");
const app=express();
dotenv.config();
const PORT = process.env.PORT || 5500;
const connectDB = require("./database");
const methods = require("methods");
app.set("./views", path.join(__dirname, "/views"));
app.set("view engine");
app.use("/api/file_sharing", require("./routes/files"));
// app.use("/file/download", require("./routes/downloadlink"));
connectDB();
app.use(cors, function(req, resp, next){
  resp.header("Access-Control-Allow-Methods", "GET, HEAD, PUT, PATCH, POST, DELETE");
  resp.header("Access-Control-Allow-Origin", "*");
  resp.header("Access-Control-Allow-Headers", 'Content-Type');
  next();
   });
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
