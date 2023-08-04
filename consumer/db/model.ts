import mongoose from "mongoose";
const schema = new mongoose.Schema({
    name: String,
    file: Buffer 
});
export const VideoModel = mongoose.model('video', schema);