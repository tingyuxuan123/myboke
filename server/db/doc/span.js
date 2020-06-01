const span=require('../Model/span')


function getspan(){
    return span.find();
}

function addspan(data){ //添加分类
    return span.insertMany(data);
}

function updatespan(_id,data){//修改分类
    return span.updateMany(_id,data);
}

function deletespan(data){//删除分类
    return span.deleteMany(data);
}


module.exports={getspan,addspan,updatespan,deletespan}