import mongoose, { Schema, Mongoose } from "mongoose";

const userSchema = new mongoose.Schema({
    userName: String,
    email: String,
    followerCount: Number,
    followingCount: Number,
    postCount: Number,
    firstName: String,
    lastName: String,
    bio: String,
    profilePic: String,
    password:String
    // posts: [{type:Schema.Types.ObjectId, ref:'PostModel'}]
    // stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]

});
export const UserModel = mongoose.model('user', userSchema);


const postSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    user_id: {
        type: mongoose.Types.ObjectId,
        ref:'UserModel'
    },
    likeCount:{
        type:Number
    }


})
export const PostModel = mongoose.model('post', postSchema)


const actionSchema = new mongoose.Schema({
    actionType: String,
    commentMessage:String,
    doneBy:mongoose.Schema.ObjectId,
    commentLikeCount:Number
})
export const ActionsModel = mongoose.model('action',actionSchema)
