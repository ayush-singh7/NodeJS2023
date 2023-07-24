import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { SessionModel } from "./db-models";

export const Authorisation = (req:Request, res:Response, next:NextFunction)=>{
    let token;
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


export const SessionManagement = async(req:Request, res:Response, next:NextFunction)=>{
    
    
    try{
        const {tokenData} = req.body;
        let sessionDetails = await SessionModel.findOne({sessionId:tokenData.sessionId, userId:tokenData.userId})    
        console.log(sessionDetails,"----------------SD-----------");
                
        if(sessionDetails?.active){
            next()
        }else{
            res.status(401).send("Authorisation Error")
        }

    }catch(e){
        res.send(e);
    }
    
    

}