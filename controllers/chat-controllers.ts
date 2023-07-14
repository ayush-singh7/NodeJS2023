import { Request, Response } from "express";
import { sequelize } from "../database/db";
import { MessagesModel, RoomModel, UserModel } from "../models/user-model";
import jwt from "jsonwebtoken";
import * as crypto from "crypto";

// { message_content:"GOOD NIGHT", room_id:"A2", sender_id:"3"}
export const SendChat = async (req: Request, res: Response) => {

    try {
        const token = req.body.token || req.query.token || req.headers["authorization"]
        const from_data:any = jwt.verify(token, 'ayush');

        const {  room_id, message_content } = req.body;
        
        let messageObj = {
            message_content: message_content,
            room_id: room_id,
            sender_id:from_data.id
        }

        await MessagesModel.create(messageObj)
        res.status(200).send("message sucessfully sent")
    } catch (e) {
        res.status(400).send(e);
    }
}

// {to_id: 3} payload

export const CreateChat = async (req: Request, res: Response) => {

    const token = req.body.token || req.query.token || req.headers["authorization"]
    const from_data:any = jwt.verify(token, 'ayush');
    try{
        let from_id = from_data.id;
        const {to_id} = req.body;


        let [room_data, other_data]:any = await sequelize.query(`SELECT room_id FROM rooms WHERE participant_1='${to_id}' AND participant_2='${from_id}' OR participant_1='${from_id}' AND participant_2='${to_id}' `)
        console.log(room_data,'----------------------------------------');
        if(room_data.length > 0){
            res.status(200).send(room_data);

        }else{
            let new_room_id = crypto.randomUUID();
            let newRoomObj = {
                participant_1:to_id, 
                participant_2:from_id,
                room_id:new_room_id.substring(0,8)
            }
            
            await RoomModel.create(newRoomObj)
            res.status(200).send(`${new_room_id} has been created for the participants`)

        }

    }catch(e:any){
        console.log(e,"-----------");
        
        res.send(e)
    }

}

export const DeleteChat = async(req:Request, res:Response)=>{

    try{
        
        const {room_id} = req.query;
        
        let deleteData = await MessagesModel.destroy({
            where: {
                room_id:room_id
            }
        })
        
        res.status(200).send("OK DELETED")
    }catch(e:any){
        
        res.status(400).send(e)
    }
}

export const FetchChat = async (req: Request, res: Response) => {

    try{
        const { page, size } = req.query;
        const { limit, offset } = getPagination(Number(page), Number(size));

        let messages = await MessagesModel.findAndCountAll({ limit,offset})
        res.status(200).send(messages)
    }catch(e){
        res.status(400).send(e);
    }
}

const getPagination = (page:any, size:Number) => {
    const limit = size ?  +(size) : 3;
    const offset = page ? page * limit : 0;
  
    return { limit, offset };
  };