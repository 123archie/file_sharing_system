const mongoose=require("mongoose")
function connectDB(){
    mongoose.connect(url, { use})
}