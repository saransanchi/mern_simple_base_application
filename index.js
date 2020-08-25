const express=require('express');
const app=express();
const mongoose =require('mongoose');
const morgan=require('morgan');
const cors=require('cors');


//middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());



//router
const infoRouter=require('./router');
app.use("/info",infoRouter);






//listen port
app.listen(5000,()=>{
    console.log("server started on 5000");
})


//db connection

mongoose.connect("mongodb://localhost:27017/tutorial",{ useNewUrlParser: true ,useUnifiedTopology: true},(err)=>{
    if(!err)
    {
        console.log("db was connected");
    }
})