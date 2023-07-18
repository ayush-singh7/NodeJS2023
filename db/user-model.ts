import mongoose, {Schema, Mongoose } from "mongoose";

const userSchema = new mongoose.Schema({
    userName:String,
    email:String,
    followerCount:Number,
    followingCount:Number,
    postCount:Number,
    firstName:String,
    lastName:String,
    bio:String,
    profilePic:String,
    posts: [{ type: Schema.Types.ObjectId, ref: 'post' }]


});

export const UserModel = mongoose.model('user', userSchema);

const postSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    idk:{
        type:'ObjectId', ref:'UserModel'
    }  

})

export const PostModel = mongoose.model('post',postSchema)



const personSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    age: Number,
    stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
  });
  
  const storySchema = new Schema({
    author: { type: Schema.Types.ObjectId, ref: 'Person' },
    title: String,
    fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
  });
  
 export const Story = mongoose.model('Story', storySchema);

 export const Person = mongoose.model('Person', personSchema);