const mongoose=require('mongoose')

const classifySchema=new mongoose.Schema({
    classify:{type:String,required:true}
})

const classify=mongoose.model("classifys",classifySchema)



module.exports=classify