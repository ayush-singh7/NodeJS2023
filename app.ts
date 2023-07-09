import express, { Application } from "express";
const app:Application = express()
import dotenv from "dotenv";
import routes from "./routes/routes";
dotenv.config()

app.use(express.json())

app.listen(process.env.PORT, ()=>{
    routes(app)
    console.log("LISTENING ON ",process.env.PORT);

}) 