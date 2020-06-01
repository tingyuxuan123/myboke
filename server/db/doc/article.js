const articles=require("../Model/article");

function addarticle(data){

   return articles.insertMany(data)
}

function getarticle(pageindex,pagesize,data){
  //  console.log(pageindex,pagesize,12)
    return articles.find(data).sort({'_id':-1}).limit(pagesize).skip((pageindex-1) * pagesize) //查找全部文章
}

function updatearticle(_id,status){
    
    return articles.updateOne({_id},{status})
}

function deletearticle(data){

    return articles.deleteOne(data)
}



module.exports={addarticle,getarticle,updatearticle,deletearticle}


