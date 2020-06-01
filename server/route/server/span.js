const express=require('express');
const {getspan,addspan,updatespan,deletespan}=require('../../db/doc/span');
const router=express.Router();

router.post('/getspan',(req,res)=>{
    getspan().then((result) => {
        res.send(result)
    }).catch((err) => {
        
    });
})

router.post('/addspan',(req,res)=>{
    addspan(req.body).then((result) => {
        res.send({msg:'添加成功'})
    }).catch((err) => {
        
    });
})

router.post('/updatespan',(req,res)=>{
    let {_id,span}=req.body
    console.log(req.body)
    updatespan({_id},{span}).then((result) => {
       
        res.send({msg:'修改成功'})
    }).catch((err) => {
        
    });
})

router.post('/deletespan',(req,res)=>{
    console.log(req.body)
    deletespan(req.body).then((result) => {
        res.send({msg:'添加成功'})
    }).catch((err) => {
        
    });
})


module.exports=router