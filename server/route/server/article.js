const express= require("express");
const {addarticle,getarticle,updatearticle,deletearticle} =require("../../db/doc/article")
 const router= express.Router();


 
 router.post("/addarticle",(req,res)=>{
     //  let {data} = req.body
           

addarticle(req.body).then((result) => {
  
    res.send({msg:'添加成功'})
}).catch((err) => {
    
});

 })

 router.post("/getarticle",(req,res)=>{
     let {pageindex,pagesize,data}=req.body
     console.log(data);
     getarticle(pageindex,pagesize,data).then((result) => {
         res.send(result)
     }).catch((err) => {
         
     });
 })

 router.post("/updatearticle",(req,res)=>{
     let {_id,status}=req.body
   //  console.log(_id,status)
    updatearticle(_id,status).then((result) => {
        res.send({msg:'修改成功'})
    }).catch((err) => {
        
    });
})

router.post("/deletearticle",(req,res)=>{
   
    
    deletearticle(req.body).then((result) => {
        res.send({msg:'删除成功'})
    }).catch((err) => {
        
    });
})




 module.exports=router