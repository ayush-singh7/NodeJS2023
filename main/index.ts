import express, { Request, Response } from "express";
import { upload } from "./middlewares/multer";
import amqp from "amqplib";

const app = express()
app.use(express.json())

const queue = "data_queue";

app.post('/video',upload.single('video') ,async(req:Request, res:Response)=>{

    let connection;
    
    if(req.file ){

        try{
            connection = await amqp.connect("amqp://localhost");
            const channel = await connection.createChannel();
            await channel.assertQueue(queue, { durable: false });
            channel.sendToQueue(queue, req.file.buffer);

            // channel.sendToQueue(queue, Buffer.from(JSON.stringify(req.body.text)));

             res.send("file upload in process");
            await channel.close();

        }catch(e){

        }finally{
            if (connection) await connection.close();
        }
        
    }

})  

app.post('/test',async(req:Request, res:Response)=>{

    try {
        const {text} = req.body;


      } catch (err) {
        console.warn(err);
      } finally {
      }

})



app.listen(3000,()=>{
    console.log("running at port 3000");   
})
