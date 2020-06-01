const express=require('express');
const {getclassify,addclassify,updateclassify,deleteclassify}=require('../../db/doc/classify');
const router=express.Router();

router.post('/getclassify',(req,res)=>{
    
    getclassify().then((result) => {
    
        res.send(result)
    }).catch((err) => {
        
    });
})

router.post('/addclassify',(req,res)=>{
  
    addclassify(req.body).then((result) => {
      
        res.send({msg:'添加成功'})
    }).catch((err) => {
        
    });
})

router.post('/updateclassify',(req,res)=>{
    let {_id,classify}=req.body
 
    updateclassify({_id},{classify}).then((result) => {
       
        console.log(result)
        res.send({msg:'修改成功'})
    }).catch((err) => {
        
    });
})

router.post('/deleteclassify',(req,res)=>{
    
    deleteclassify(req.body).then((result) => {
        res.send({msg:'添加成功'})
    }).catch((err) => {
        
    });
})


module.exports=router