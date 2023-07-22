import express, { Application } from "express"
import { routes } from "./routes/routes";
import { connect } from "./db/connection";
import {  redis } from "./db/redis";
import swaggerDocs from "./swagger/swagger";



const app:Application = express()



app.use(express.json())

routes(app);

app.listen(4000,async()=>{

    swaggerDocs(app, 4000)

    console.log("RUNNNG at 4000");
    redis()
    connect()

})