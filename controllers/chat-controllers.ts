import { Request, Response } from "express";
import UserModel from "../models/note-model";
import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("sqlite::memory:");

export const FetchChat =  async (req:Request,res:Response)=>{

    
    // try{
    //     const User = sequelize.define("users", {
    //         id: {
    //             type:DataTypes.INTEGER,    
    //              primaryKey: true
    //             },
    //         username: DataTypes.TEXT,
    //         email: DataTypes.TEXT,
    //         password: DataTypes.TEXT,
    //         room_id: DataTypes.TEXT,
            
    //       });
          
    //     const ans = await User.findAll({  });
    //     console.log(ans,"HEEYYYYYYYYYYYYYYYYYYYYY");

    // }catch(e){
    //     console.log(e,"AAAAAAAAAAAAAAAAAAAAAAAA");
        
    // }

    




    
} 