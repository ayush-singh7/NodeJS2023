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
    caption: {
        type: String,
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref:'UserModel'
    },
    likeCount:{
        type:Number,
        default:0
    },
    commentCount:{
        type:Number,
        default:0
    },
    latestComment:{
        type:String
    },
    lastLikeUserName:{
        type:String
    },
    imageUrl:{
        type:String,
    }
})
export const PostModel = mongoose.model('post', postSchema)


const actionSchema = new mongoose.Schema({
    actionType: String,
    commentMessage:String,
    doneBy:mongoose.Schema.ObjectId,
    postId:mongoose.Schema.ObjectId,
    commentLikeCount:Number
})
export const ActionsModel = mongoose.model('action',actionSchema)


const sessionSchema = new mongoose.Schema({
    userId:mongoose.Schema.ObjectId,
    activityStatus:String
})

export const SessionModel = mongoose.model('session',sessionSchema)