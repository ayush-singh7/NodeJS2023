import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import dotenv from "dotenv"
import {UserModel} from "../models/user-model";
import { loginSchema, registerSchema } from "../models/validation-schemas";
dotenv.config()

const key = 'ayush';

export const Login = async (req:Request,res:Response)=>{
   const { email, password} = req.body;
    try{
        console.log("here------------------------------------------");
        
        // const { error } = await loginSchema.validateAsync(req.body);
        let user_exist = await UserModel.findOne({where: {email:email, password:password}}); // checking does the user exist in db
        console.log(user_exist,"USER_EXIST");
        
        if(user_exist){
        const token = jwt.sign(
            { email:email, id:user_exist.dataValues.id },
            key,
            {
                expiresIn: "2h",
            });
            
            res.status(200).send({token:token});
            
        }else{
            res.status(404).send("Wrong Credentials");
        }
    }catch(e:any){
        const {details} = e;
        res.status(400).send(details);

     }
    
}

export const RegisterUser = async(req:Request,res:Response) =>{
    try{
        const {email, password, username } = req.body;
        const { error } = await registerSchema.validateAsync(req.body);

        let user_exist = await UserModel.findOne({where: {email:email}}); // checking does the user exist in db
        if(!user_exist){
            UserModel.create({...req.body}).then((result:any)=>{

                console.log(result,"GOOD");
                res.status(201).send("User succesfully added") 
                
            }).catch((err:any)=>{
                console.log(err,"BAD");
                res.status(400).send("Something went wrong")
                
            })  
        }else{
            res.status(200).send("User already exists!")
        }        
        
    }catch(e:any){
        const {details} = e;
        res.send(details);
    }
}




