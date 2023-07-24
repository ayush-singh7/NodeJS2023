import { Request, Response } from "express";
import { SessionModel, UserModel } from "../db/user-model";
import jwt from "jsonwebtoken";
import { RedisClient } from "../db/redis";
import { loginSchema, registerSchema } from "../validation-schemas/onboarding-schema";

export const Signup = async(req:Request, res:Response)=>{
    try{
        const {userName , email,firstName,lastName, password}= req.body;
       
        const { error } = await registerSchema.validateAsync(req.body);

        
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
        let {error} = await loginSchema.validateAsync(req.body)
        let user = await UserModel.findOne({userName:userName,password:password})
        if(user){

            let id = user._id;
            
            await SessionModel.create({
                userId:id,
                activityStatus:'active'
            })

            RedisClient.set(id.toString(),'active')
           
            let token = jwt.sign({id:id}, 'ayush',{expiresIn:'2h'});

            res.send(token)
            
        }
    }catch(e){
        res.send(e);   
    }
}


export const Logout = async(req:Request, res:Response)=>{
    try{
        const {tokenData} = req.body;
        let id = tokenData.id;
        
        let redisDelete = await RedisClient.del(id.toString())
        
        let logout = await SessionModel.deleteOne({userId:tokenData.id})
        res.send(logout)


    }catch(e){
        res.send(e)
    }
}