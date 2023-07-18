import express, { Application } from "express"
import { routes } from "./routes/routes";
import { connect } from "./db/connection";


const app:Application = express()

routes(app);




app.listen(4500,()=>{
    console.log("RUNNNG at 4500");
    connect()
})