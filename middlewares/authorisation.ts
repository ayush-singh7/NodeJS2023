import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { RedisClient } from "../db/redis";
import { SessionModel } from "../db/user-model";
import mongoose from "mongoose";
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
    let keyToCheck = req.body.tokenData.id;
    
    try{
        let ans = await RedisClient.exists(keyToCheck )
        console.log(ans,'hererererereerreere');
        if(ans == 1){
            next();
        }else{
            let user = await SessionModel.findOne({userId:new mongoose.Schema.ObjectId(keyToCheck)})
            if(user){
                next()
            }else{
                res.send("UNAUTHORISED ACCESS")
            }
        }
    }catch(e){
        res.send("UNAUTHORISED ACCESS");
    }
    
    

}