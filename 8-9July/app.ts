import express from "express";
import { DeleteUser, GetUser, LoginUser, RegisterUser, UpdateUser } from "./controllers/onboarding-controllers";
const app = express()
app.use(express.json());
import dotenv from "dotenv";

dotenv.config();


app.post('/register',RegisterUser);

app.post('/login',LoginUser);

app.get('/user/:id',GetUser);

app.delete('/user/:id',DeleteUser)

app.patch('/user/:id',UpdateUser)

app.listen(process.env.PORT, ()=>{
    
    console.log(`listening at ${process.env.PORT}`);
    
})
