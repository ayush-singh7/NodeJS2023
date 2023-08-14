import { Router, Request, Response } from 'express';
import {ProductModel, UserModel} from "../database/models"

class ProductServices {

    constructor() {
    }
    
    async fetchProducts(queryParams:any){
        const {price,brand,rating} = queryParams;
        try{
            let pipeline = [];
            if(price){

            }
            if(brand){
                pipeline.push({$match:{brand:brand}});
            }
            if(price){
                pipeline.push()
            }

            
            let products = await ProductModel.aggregate(pipeline);                
            return products;
        }catch(e){
            return e;
        }
    
    }
 
}

export const productServices = new ProductServices()