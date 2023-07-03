import {  Request, Response,NextFunction } from "express";


export const middleware = {
    sentenceCase: (req:Request, res:Response, next:NextFunction)=> {
        try{
            for(let i in req.body){
                if(req.body[i] && typeof(req.body[i]) == 'string'){                
                    req.body[i] = req.body[i].charAt(0).toUpperCase() + req.body[i].slice(1);
                }
            }
        }catch(e){
            console.log("error",e);   
        }
        next();
    },
    emptyStringCheck: (req:Request, res:Response, next:NextFunction)=>{
        try{
            for(let i in req.body){
                if(!req.body[i]){                
                    req.body[i] = null;
                }
            }
        }catch(e){
            console.log("error",e);
        }
        next();
    }  

    
}



