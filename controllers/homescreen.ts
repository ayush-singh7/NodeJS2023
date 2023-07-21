import { Request, Response, response } from "express";
import {  ActionsModel, PostModel, UserModel } from "../db/user-model";
import mongoose from "mongoose";

export const HomeScreen = async(req:Request, res:Response)=>{
    try{
        let ans = await UserModel.create({
            userName:'ayushwashere',
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

export const CreatePost = async(req:Request, res:Response)=>{
    try{      
        const {caption } = req.body;
        let postDetails = await PostModel.create({
            userId:req.body.tokenData.id,
            caption: caption,
            imageUrl:'https://picsum.photos/200'
        })
        
        res.send(postDetails);
    
    }catch(e){
        console.log(e);
        res.send(e)
    }
}

export const UserPosts = async(req:Request, res:Response)=>{
    try{
      const {id} = req.body.tokenData;
      let userID = new mongoose.Types.ObjectId(id);
      console.log("HEREEEEEEEEEEEEEEEEEEEEEEEEEE");
      
      let ans = await UserModel.aggregate([
            {
                $match: {_id:userID}
            } , 
            {
                $lookup: {
                       from: "posts",
                       localField: "_id",
                       foreignField: "userId",
                       as: "MY_POSTS"
                }
            }
          ])

        res.send(ans);

          
    }catch(e){
        console.log(e,'EEEEEEEEEEEEEEEEEEEEEEEEEEEEE');
        
    }
}



// like/dislike should be handled and one user can have one like only
export const Action = async(req:Request, res:Response)=>{

    try{

        // const userData = jwt.verify(,'privateKey')
        
        let {actionType, comment_message, postId, tokenData } = req.body;
        // let td = new mongoose.Schema.ObjectId(tokenData.id)
        // let pid = new mongoose.Schema.ObjectId(postId)
        // console.log(tokenData.id,postId,'---VALUES-----------------------');
        
        if(actionType === 'LIKE'){
            postId = new mongoose.Types.ObjectId(postId);
           await PostModel.findOneAndUpdate({_id:postId},{$inc:{likeCount:1}})
           
            let ans = await ActionsModel.create({
                actionType: 'LIKE',
                doneBy: new mongoose.Types.ObjectId(tokenData.id),
                postId: new mongoose.Types.ObjectId(postId),

           })

           console.log(ans.toJSON(),'----------------------------');
                       

            res.send(ans);
        }else{
            

        }

    }catch(e){
        console.log(e,'---------toal-------------------');

        res.send(e)
    }

}
