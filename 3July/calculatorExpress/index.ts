import { Application } from "express";
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import express from "express";
import { Division, Exponent, Log, Modulo, Multiply, Subtract, Sum } from "./controllers/calculator";
import { middleware } from "./middlewares/demo";

dotenv.config();

const app:Application = express();

const port = process.env.PORT;

app.use(bodyParser.json())

app.post('/sum', Sum);

app.post('/subtract', Subtract);

app.post('/multiply', Multiply);

app.post('/division', Division);

app.post('/modulo',Modulo);

app.post('/exponent' ,Exponent);

app.post('/log' ,Log);




// Harish Sir Task
app.post('/middle',[middleware.sentenceCase, middleware.emptyStringCheck],(req:any,res:any)=>{

  try{
    res.send(req.body);
  }catch(e){
    console.log(e,"ERRROROR");  
  }
  
})


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});