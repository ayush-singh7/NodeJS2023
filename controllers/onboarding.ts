import { Request, Response } from "express";
import { SessionModel, UserModel } from "../db/user-model";
import jwt from "jsonwebtoken";
import { RedisClient } from "../db/redis";
import mongoose from "mongoose";

export const Signup = async(req:Request, res:Response)=>{
    try{
        const {userName , email,firstName,lastName, password}= req.body;
        let ans =  await UserModel.create({
            email:email,
            firstName:firstName,
            lastName:lastName,
            password:password,
            userName:userName
        })
        res.send(ans);

    }catch(e){
        res.send(e);
    }
}

export const Login = async(req:Request, res:Response)=>{
    try{
        const {userName, password} = req.body;
        let user = await UserModel.findOne({userName:userName,password:password})
        if(user){

            let id = user._id;
            console.log(id,"----------here----------");
            
            await SessionModel.create({
                userId:id,
                activityStatus:'active'
            })

            RedisClient.set(id.toString(),'active')
           
            let token = jwt.sign({id:id}, 'ayush',{expiresIn:'2h'});

            res.send(token)
            
        }
    }catch(e){
        
    }
}
// await client.set('key', 'value');

export const Logout = async(req:Request, res:Response)=>{
    try{
        const {tokenData} = req.body;
        let id = tokenData.id;
        console.log(tokenData,'-----------------------LLLL-------------------');
        
        let redisDelete = await RedisClient.del(id.toString())
        console.log(redisDelete,'12222222222222222222222222222222222222');
        
        let logout = await SessionModel.deleteOne({userId:tokenData.id})
        res.send(logout)


    }catch(e){
        res.send(e)
    }
}