const classify=require('../Model/classify');

function getclassify(){
    return classify.find();
}

function addclassify(data){ //添加分类
    return classify.insertMany(data);
}

function updateclassify(_id,data){//修改分类
   
    return classify.updateOne(_id,data);
}

function deleteclassify(data){//删除分类

    return classify.deleteOne(data);
}


module.exports={getclassify,addclassify,updateclassify,deleteclassify}
