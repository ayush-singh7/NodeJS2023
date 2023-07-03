import { Application, Request, Response } from "express";


export const Sum = (req:Request, res:Response) => {
    try{
      let ans:Number = req.body.num1 + req.body.num2;
      res.status(200).send({'answer':ans});
    }catch(e){
      console.log(e,"ERROR"); 
    }
}
export const Subtract = (req:Request, res:Response) =>{
    try{
        let ans:Number = req.body.num1 - req.body.num2;
        res.status(200).send({'answer':ans});
      }catch(e){
        console.log(e,"ERROR"); 
      }   
}
export const Multiply = (req:Request, res:Response) =>{
    try{
        let ans:Number = req.body.num1 * req.body.num2;
        res.status(200).send({'answer':ans});
      }catch(e){
        console.log(e,"ERROR"); 
      }   
}

export const Division = (req:Request, res:Response) =>{
    try{
        let ans:Number = req.body.num1 / req.body.num2;
        console.log(ans);
        
        res.status(200).send({'answer':ans});
      }catch(e){
        console.log(e,"ERROR"); 
      }   
}
export const Modulo = (req:Request, res:Response) =>{
    try{
        let ans:Number = req.body.num1 % req.body.num2;
        res.status(200).send({'answer':ans});
      }catch(e){
        console.log(e,"ERROR9999"); 
      }   
}
export const Exponent = (req:Request, res:Response) =>{
    try{
        let ans:Number = Math.pow(req.body.num1,req.body.num2)
        res.status(200).send({'answer':ans});
      }catch(e){
        console.log(e,"ERROR"); 
      }   
}

export const Log = (req:Request, res:Response) =>{
    try{
        let ans:Number = Math.log(req.body.num1) / Math.log(req.body.num2);
        res.status(200).send({'answer':ans});
      }catch(e){
        console.log(e,"ERROR"); 
      }   
}