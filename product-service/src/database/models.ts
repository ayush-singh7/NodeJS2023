import mongoose, { Document, Schema } from 'mongoose';


interface User extends Document {
  password: string;
  email: string;
}

interface Product extends Document {
  brand:string,
  category:string,
  price:number,
  parentCategory:string,
  rating:number,
  productName:string,
  productImage:string
}

interface Category extends Document{
  categoryId:Number,
  categoryName:string,
  parentId:Number
}



const userSchema = new Schema<User>({
  password: { type: String, required: true },
  email: { type: String, required: true },
});


export const UserModel = mongoose.model<User>('User', userSchema);


const productSchema = new Schema<Product>({
  brand:{ type: String, required: true },
  category:{ type: String, required: true },
  price:{ type: Number, required: true },
  parentCategory:{ type: String, required: true },
  rating:{ type: Number, required: true },
  productName:{ type: String, required: true },
  productImage: { type: String, required: true }
})
export const ProductModel = mongoose.model<Product>('Product', productSchema);

const categorySchema = new Schema<Category>({
  categoryId:{type:Number, required:true},
  categoryName:{type:String, required:true},
  parentId:{type:Number, required:true}
})
export const CategoryModel = mongoose.model<Category>('categories',categorySchema)