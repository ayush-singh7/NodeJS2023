import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import dotenv from "dotenv"
import UserModel from "../models/note-model";
// import { Sequelize } from "sequelize";
dotenv.config()

const key = 'ayush';
export const Login = (req:Request,res:Response)=>{
   const {id, email, password} = req.body;
   
   const token = jwt.sign(
    { user_id:id, email:email },
    key,
    {
      expiresIn: "2h",
    });
    
    res.status(200).send({token:token});
    
}

export const RegisterUser = async(req:Request,res:Response) =>{
    try{
        const {email, password, username, room_id } = req.body;
        // const { error } = await registerSchema.validateAsync(req.body);
        

        // req.body.id = uuid;

         UserModel.create({
            email:email,
            password:password,
            username:username,
            room_id:room_id
        }).then((res)=>{
            
            console.log(res,"GOOD");
            
        }).catch((err)=>{
            console.log(err,"BAD");
            
        })



        
        
        
        
    }catch(e:any){
        const {details} = e;
        res.send(details);
    }
    
}




