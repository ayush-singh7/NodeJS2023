import { Request, Response } from "express";
import { UserModel } from "../db/user-model";
import jwt from "jsonwebtoken";

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
            let token  = jwt.sign({id:id}, 'ayush',{expiresIn:'2h'});
            res.send(token)

        }
    }catch(e){

    }
}
