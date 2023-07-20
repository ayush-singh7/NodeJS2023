import { Request, Response, response } from "express";
import {  ActionsModel, PostModel, UserModel } from "../db/user-model";
import mongoose from "mongoose";
import jwt from "jsonwebtoken"
export const HomeScreen = async(req:Request, res:Response)=>{
    try{
        let ans = await UserModel.create({
            userName:'ayush.was.here',
            email:'ayush@fface7@gmail.com',
            followerCount:190,
            followingCount:300,
            postCount:19,
            firstName:'Ayush',
            lastName:'Singh',
            bio:'',
            profilePic:'',
            posts:[]
        })
        res.send(ans)
    }catch(e){
        console.log(e);
        res.send(e)
    }

}

export const MakePost = async(req:Request, res:Response)=>{
    try{
        
        const {user_id }= req.body;

        let ans = await PostModel.create({
            name:'POST x',
            user_id:user_id
        })
        res.send(ans)
    }catch(e){
        console.log(e);
        res.send(e)
    }
}

export const Test = async(req:Request, res:Response)=>{
    try{
      const {user_id} = req.body;
      let userID = new mongoose.Types.ObjectId(user_id);
    //   let ans = await UserModel.aggregate([
    //         {
    //             $match: {_id:userID}
    //         } , 
    //         {
    //             $lookup: {
    //                    from: "posts",
    //                    localField: "_id",
    //                    foreignField: "user_id",
    //                    as: "MY_POSTS"
    //                  }
    //         }
    //       ])

    // res.send(story);

          
    }catch(e){
        console.log(e,'EEEEEEEEEEEEEEEEEEEEEEEEEEEEE');
        
    }
}


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
            console.log('11111111111111111111111111111111111111');
            
            
              let token  = jwt.sign(req.body, 'privateKey');


            console.log(token,"())))))))))))))))))");
            res.send(token)

        }

    }catch(e){

    }
}


export const Action = async(req:Request, res:Response)=>{

    try{

        // const userData = jwt.verify(,'privateKey')
        
        const {action_type, comment_message, postId , doneBy} = req.body;
        
        if(action_type === 'LIKE'){
           
           await PostModel.findOneAndUpdate({id:postId},{$inc:{likeCount:1}})
           
            let ans = await ActionsModel.create({
                actionType: 'LIKE',
                doneBy:doneBy,
           })
           

            res.send(ans);
        }else{
            

        }



    }catch(e){
        res.send(e)
    }

}
