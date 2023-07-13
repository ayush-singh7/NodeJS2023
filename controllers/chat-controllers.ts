import { Request, Response } from "express";
import { sequelize } from "../database/db";

export const FetchChat =  async (req:Request,res:Response)=>{
    
    try{

        const result = await sequelize.query(`SELECT * FROM messages WHERE room_id = '${req.query.room_id}'`);
        // console.log(result[0],"------------------RESULT----------------")
        res.status(200).send(result[0]);
    }catch(e){
        console.log(e,"eeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
        
    }
    
} 