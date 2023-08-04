import express from "express";
const app = express();

import amqp from "amqplib";
import { VideoModel } from "./db/model";
import { dbConnection } from "./db/connection";


const queue = "data_queue";
(async () => {
  try {
    await dbConnection()

    const connection = await amqp.connect("amqp://localhost");

    const channel = await connection.createChannel();
    process.once("SIGINT", async () => {
      await channel.close();
      await connection.close();
    });

    await channel.assertQueue(queue, { durable: false });
    await channel.consume(
      queue,
      (message) => {
        if (message) {
         console.log('MESSAGE is: ',message.content);
         
          VideoModel.create({
            name: "FILE DATA",
            file:message.content
          }).then(()=>{ 
            console.log("BUFFER DATA HAS BEEN ADDED");
            channel.ack(message);
          }).catch((e)=>{
            console.log(e,'error occured');
          })

          
        }
      },
      { noAck: false } // automatic ackn will be sent need to make it false
    );

    

    console.log(" [*] Waiting for messages. To exit press CTRL+C");
  } catch (err) {
    console.warn(err);
  }
})();


app.listen(3002, ()=>{
    console.log("running at port 3002'")
})
