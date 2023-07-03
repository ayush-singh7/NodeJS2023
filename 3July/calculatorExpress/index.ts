import { Application } from "express";
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import express from "express";
import { Division, Exponent, Log, Modulo, Multiply, Subtract, Sum } from "./controllers/calculator";

dotenv.config();

const app:Application = express();

const port = process.env.PORT;

app.post('/sum',bodyParser.json(), Sum);

app.post('/subtract',bodyParser.json(), Subtract);

app.post('/multiply',bodyParser.json(), Multiply);

app.post('/division',bodyParser.json() ,Division);

app.post('/modulo',bodyParser.json() ,Modulo);

app.post('/exponent',bodyParser.json() ,Exponent);

app.post('/log',bodyParser.json() ,Log);


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});