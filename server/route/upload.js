const multer=require('multer')
const express =require('express')


const router=express.Router()

var storage=multer.diskStorage({

    destination:function(req,file,cb){
        cb(null,'./uploads')
    },

    filename:function(req,file,cb){
        // var fileFormat=(file.originalname).split('.')
        
        var fileFormat = (file.originalname).split('.')
        console.log(fileFormat)
      
        cb(null,new Date().getTime()+parseInt(Math.random()*9999)+'.'+fileFormat[1])
        
    }

})

var upload=multer({
    storage:storage
})

const url01= 'http://192.169.33.45:8085/img/';
const url02='http://192.168.3.9/img/';

router.post('/upload',upload.single('img'),(req,res)=>{
    var file=req.file;
    console.log(file,1);
    res.send({
        success:1,         
        message:'upload success',
        url:url02+`${req.file.filename}`
    })

})

router.post('/img', upload.single('editormd-image-file'), (req, res, next)=> {
    var file =req.file;
    console.log(file,1)

    res.send({
        success:1,         
        message:'upload success',
        url:url02+`${req.file.filename}`
    })
    
    });
     

module.exports=router