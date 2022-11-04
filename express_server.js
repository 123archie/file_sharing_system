const express = require("express");
const cors=require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5500;
const connectDB = require("./database");
const { Router } = require("express");
const methods = require("methods");
app.set("./views", path.join(__dirname, "/views"));
app.set("view engine");
app.use("/api/file_sharing", require("./routes/files"));
// app.use("/api/file_sharing", require("./routes/download"));
app.use("/file/download", require("./routes/downloadlink"));
connectDB();
const corsOptions={
  origin:'*',
  methods:['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}
   
app.use(cors(corsOptions));
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
