import { Request, Response } from "express";
import {  DataTypes } from "sequelize";
import { sequelize } from "../database/db";
import UserModel from "../models/note-model";
// import { developmentConfig } from "../config";

export const FetchChat =  async (req:Request,res:Response)=>{

    console.log(req.query,"APARAMS");
    
    try{
        await sequelize.authenticate();

        
        const ans = await UserModel.findAll();
        console.log(ans,"HEEYYYYYYYYYYYYYYYYYYYYY");

    }catch(e){
        console.log(e,"AAAAAAAAAAAAAAAAAAAAAAAA");
        
    }

    // try{

    //     const result = await sequelize.query(`SELECT * FROM messages WHERE room_id = '${req.query.room_id}'`);
    //     // console.log(result[0],"------------------RESULT----------------")
    //     res.status(200).send(result[0]);
    // }catch(e){
    //     console.log(e,"eeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
        
    // }
    
} 