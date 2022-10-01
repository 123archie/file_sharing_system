const routes = require('express').Router();
const multer=require('multer');
const path=require('path');
const File=require('./models/fileSchema');
const {v4: uuid4}=require('uuid');
let storage=multer.diskStorage({
  destination:(req, file,cb) =>cb(null,'uploads/'),
  filename:(req, file, cb) =>{
    const uniqueName=`${Date.now()}-${Math.round(Math.random()*1E9)}${path.extname(files.originalname)}`;
    cb(null, uniqueName);}
 
  
});
let upload=multer({
 storage:storage
}).single('myfile') ;
 
routes.post("/test", (req, resp) => {
  //Validating the request
  if(!req.file){
    return resp.json({error: 'Please upload your file'});
  }
  //Store the file from uploads folder
   upload(req, resp, async (err)=>{
    if(err){
      return resp.status(500).send({error: err.message});
    }

    //Storing in the database
    
    const file=new File({
      filename:req.file.filename,
      uuid: uuid4(),
      path: req.file.path,
      size: req.file.size
    });

   const response=await file.save;
  return resp.json({file: `${process.env.APP_BASE_URL}/file/${response.uuid}`});
})
//Generate response
});

module.exports = routes;
