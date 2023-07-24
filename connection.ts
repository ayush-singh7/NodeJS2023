import mongoose from "mongoose"

let dbUrl =  "mongodb://localhost:27017/test"

export const connect = async()=>{
    try{
        await mongoose.connect(dbUrl);
        mongoose.set('debug',true)
        console.log("CONNECTED AT LOCALHOST:27017/test"); 
        
    }catch(e){
        console.log(e);                           
    }
}

