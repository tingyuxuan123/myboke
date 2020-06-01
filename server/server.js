const express= require("express");
const cors=require("cors");
const bobyparse=require("body-parser");
const articlerouter=require("./route/server/article");
const path=require("path");
const db=require('./db/db');
const uploadsrouter=require('./route/upload');
const classifyrouter=require('./route/server/classify');
const spanrouter=require('./route/server/span')
const app=new express();


app.use(cors());
app.use(bobyparse.json());
app.use(bobyparse.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,"./public")))
app.use('/img',express.static(path.join(__dirname,"./uploads")))

app.use("/api",articlerouter);
app.use('/api',uploadsrouter);
app.use('/api',classifyrouter);
app.use('/api',spanrouter);

// http://192.169.33.45:80/api/addarticle

app.listen(80,()=>{
    
console.log("server start");


})

