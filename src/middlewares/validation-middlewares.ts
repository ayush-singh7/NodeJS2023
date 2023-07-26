import Joi, { isSchema } from 'joi'; 
import { NextFunction, Request, Response } from "express";
import { serverLogger } from '../utility/serverLogger';


export const validationMiddleware =  (schema:any) => { 
  
    return async(req:Request, res:Response, next:NextFunction) => {
        try{
            await schema.validateAsync(req.body);
            next()
        }catch(e){
            res.send(e);
        }
  } 
} 

