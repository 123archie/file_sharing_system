const routes = require("express").Router();
const multer=require('multer');
 
routes.post("/test", (req, resp) => {
  //Validating the request
  if(!req.file){
    return res.json({error: 'Please upload your file'});
  }
  //Store the file from uploads folder
   

  //Storing in the database


  //Generate response
});

module.exports = routes;
