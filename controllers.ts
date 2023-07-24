import express, { Request, Response } from "express";
import { SessionModel, UserModel } from "./db-models";
import jwt from "jsonwebtoken";
import * as crypto from "crypto";

export const Login = async (req:Request , res:Response)=>{
    try{
        const {email, password} = req.body;
        let user = await UserModel.findOne({email:email,password:password})
        
        if(user){

            let id = user._id;
            let sessionId = crypto.randomUUID();
            await SessionModel.create({
                userId:id,
                sessionId:sessionId,
                active:true
            })
            
            let token = jwt.sign({userId:id, sessionId: sessionId }, 'ayush',{expiresIn:'5h'});

            res.send(token)
            
        }
    }catch(e){
        
    }
}
export const ViewData = async (req:Request , res:Response)=>{
    res.send("SOME REAL SCENARIAOOOO ACTION")
}

export const Logout = async (req:Request , res:Response)=>{
    
    try{
        const {tokenData} = req.body
        let sessionData = await SessionModel.updateOne({userId:tokenData.userId, sessionId:tokenData.sessionId }, {$set:{active:false}})
        console.log(sessionData,"----SESSION DATA--------");
        
        res.send("succesfully logged out")
    }catch(e){
        res.send(e);
    }

}