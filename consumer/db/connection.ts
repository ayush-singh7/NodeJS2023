const dburl = "mongodb+srv://ayushsingh:ayush123@cluster0.japhppg.mongodb.net/videos"
import mongoose  from "mongoose";



export const dbConnection = async()=>{
    
    await mongoose.connect(dburl);
    console.log('connected to the db');
    
}