import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import dotenv from "dotenv"
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
        
        // const { error } = await registerSchema.validateAsync(req.body);

        let uuid = self.crypto.randomUUID();
        req.body.id = uuid;

        
        
        
    }catch(e:any){
        const {details} = e;
        res.send(details);
    }
    

}
