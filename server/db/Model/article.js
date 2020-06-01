const mongoose=require("mongoose");

const articleSchema=new mongoose.Schema({
    articletitle:{type:String,required:true},//文章标题
    // articleintro:{type:String,required:true},//文章
    classify:{type:String,required:true},//分类
    articlecontent:{type:String,required:true},//文章类容
    articlecontenthtml:{type:String,required:true},
    addtime:{type:Number,default:new Date().getTime()}, //发布时间
    readnum:{type:Number,default:0}, //阅读数
    likenum:{type:Number,default:0},
    imgurl:{type:String,required:true}, //封面图片
    span:{type:String,required:true},  //标签
    status:{type:Number,required:true} //状态 1 为 发布状态 0 为 保存状态
})

  const articles= mongoose.model("articles",articleSchema);

  module.exports=articles;