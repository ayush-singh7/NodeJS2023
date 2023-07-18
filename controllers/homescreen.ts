import { Request, Response } from "express";
import { Person, PostModel, Story, UserModel } from "../db/user-model";
import mongoose from "mongoose";

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
        })
        res.send(ans)
    }catch(e){
        console.log(e);
        res.send(e)
    }

}

export const MakePost = async(req:Request, res:Response)=>{
    try{
        let ans = await PostModel.create({
            name:'iooooooooooooo'
        })
        res.send(ans)
    }catch(e){
        console.log(e);
        res.send(e)
    }
}

export const Test = async(req:Request, res:Response)=>{
    try{
        const author = new Person({
            _id: new mongoose.Types.ObjectId(),
            name: 'Ian FlemingAAAA',
            age: 30
          });
          
          await author.save();
          
          const story1 = new Story({
            title: 'ALLLLL Royale',
            author: author._id // assign the _id from the person
          });
          
          await story1.save();


          const story = await Story.
          findOne({ title: 'Casino Royale' }).
          populate('author').
          exec();
          console.log(story,"ANS______________________________________________");
          


          
    }catch(e){
        console.log(e,'EEEEEEEEEEEEEEEEEEEEEEEEEEEEE');
        
    }
}

export const Testing = async(req:Response, res:Response)=>{
    try{
     

    }catch(e){

    }
}
