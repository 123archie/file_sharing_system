var express = require("express");
var cors=require("cors");
var bodyparser=require("body-parser");
const dotenv = require("dotenv");
const path = require("path");
const app=express();
app.use(express.json());
app.use(express.urlencoded({
  extended:false
}));
dotenv.config();

app.use(cors())
const PORT = process.env.PORT || 5500;
const connectDB = require("./database");
// const methods = require("methods");
app.set("./views", path.join(__dirname, "/views"));
app.set("view engine");
app.use("/api/file_sharing", require("./routes/files"));
// app.use("/file/download", require("./routes/downloadlink"));
connectDB();

// app.use(function(req, resp, next){
//   resp.header("Access-Control-Allow-Methods", "GET, HEAD, PUT, PATCH, POST, DELETE");
//   resp.header("Access-Control-Allow-Origin", "*");
//   resp.header("Access-Control-Allow-Headers", 'Content-Type');
//  }
// );

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
