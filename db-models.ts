import mongoose, { Schema, Mongoose } from "mongoose";

const userSchema = new mongoose.Schema({
    email: String,
    firstName: String,
    lastName: String,
    password:String

});
export const UserModel = mongoose.model('user', userSchema);


const sessionSchema = new mongoose.Schema({
    userId:String,
    sessionId:String,
    active:Boolean
})
export const SessionModel = mongoose.model('session', sessionSchema);