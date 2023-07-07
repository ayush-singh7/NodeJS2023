import { log } from "console";
import express from "express";
const app = express();
import { connect } from "./db/database";
import UserModel from "./db/models/user";
import { Login, Register } from "./controllers/onboarding";


app.use(express.json())

app.post("/register", Register);

app.post("/login", Login);

app.listen(4000,()=>{
    connect();
    console.log("LISTENING ON 4000");

})