import express, { Request, Response } from "express";
import { Login, Logout, ViewData } from "./controllers";
import { connect } from "./connection";
import { Authorisation, SessionManagement } from "./middlewares";
const app = express()

app.use(express.json())

app.post('/login',Login)

app.get('/view',Authorisation,SessionManagement,ViewData)

app.get('/logout',Authorisation, SessionManagement, Logout)

app.listen(3500, ()=>{
    console.log('Listening on port 3500');
    connect()
})