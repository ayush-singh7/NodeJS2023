import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const Authorisation = (req:Request, res:Response, next:NextFunction)=>{
    let token;
    console.log("HERE");
    
    try{
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            token = req.headers.authorization.split(' ')[1];
            const tokenData = jwt.verify(token,'ayush')
            req.body.tokenData = tokenData;
            next();
        }else{
            res.status(401).send("UNAUTHORISED ACCESS")
        }
        
    }catch(e:any){
        res.status(401).send("UNAUTHORISED ACCESS")
    }


    

}