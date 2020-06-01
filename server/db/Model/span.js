const mongoose=require('mongoose');

 const spanSchema= new mongoose.Schema({
     span:{type:String,required:true}
 })

   const span=mongoose.model("spans",spanSchema)

   module.exports=span