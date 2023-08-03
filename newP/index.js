import express from "express";
const app = express()


app.get('/test',(req,res)=>{
    res.send("DOCKER WORK")
})
const port = process.env.port || 8080;
app.listen(port,()=>{
    console.log('app is running at port 8080');
})
