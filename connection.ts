import mongoose from "mongoose"

const dbUrl="mongodb://localhost:27017/test"

export async function connection(){
    
    await mongoose.connect(dbUrl);
    mongoose.set('debug',true)


}