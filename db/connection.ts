import mongoose from "mongoose"

const dbUrl="mongodb://localhost:27017/ig"
export const connect = async()=>{
    try{
        await mongoose.connect(dbUrl);
        mongoose.set('debug',true)
        console.log("CONNECTED AT LOCALHOST:27017/ig"); 
        
    }catch(e){
        console.log(e);                           
    }
}