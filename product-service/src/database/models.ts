import mongoose, { Document, Schema } from 'mongoose';


interface User extends Document {
  password: string;
  email: string;
}

interface Product extends Document {
  brand:string,
  categoryData:Array<Category>,
  price:number,
  parentCategory:string,
  rating:number,
  productName:string,
  productImage:string,
  quantity:string
}

interface Category extends Document{
  categoryId:Number,
  categoryName:string,
  parentId?:Number
}




const userSchema = new Schema<User>({
  password: { type: String, required: true },
  email: { type: String, required: true },
});


export const UserModel = mongoose.model<User>('User', userSchema);



const categorySchema = new Schema<Category>({
  categoryId:{type:Number, required:true},
  categoryName:{type:String, required:true},
  parentId:{type:Number}
})

export const CategoryModel = mongoose.model<Category>('categories',categorySchema)

const productSchema = new Schema<Product>({
  brand:{ type: String, required: true },
  categoryData: [{type:categorySchema}] ,
  price:{ type: Number, required: true },
  rating:{ type: Number, required: true },
  productName:{ type: String, required: true },
  productImage: { type: String, required: true },
  quantity:{type:String, required:true}
})
export const ProductModel = mongoose.model<Product>('Product', productSchema);
