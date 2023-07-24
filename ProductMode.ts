import mongoose, { Schema, Mongoose } from "mongoose";

const productSchema = new mongoose.Schema({
    
    item_name:String,
    price:Number,
    color:String,
    gender:String,
    rating:Number,


});
export const ProductModel = mongoose.model('shops', productSchema);
// db.shops.aggregate([
//     {
//         $match:
//         {
//             "price": {$gte:1999, $lt:18000},
//         }
//     },
//    {
//          $match:
//        {
//           "color":"red"
//        }
//    }
 
// ])
 