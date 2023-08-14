import { Router, Request, Response } from 'express';
import { productServices } from '../services/product.services';


class ProductControllers {

    constructor() {
    }
    
    
    productListing = async(req:Request, res:Response)=>{
        try{
            let productsList  = await productServices.fetchProducts(req.query)      
            res.status(200).send(productsList);
        }catch(e){
            res.status(404).send("Not Found")
        }
    }
    

}

export const productControllers = new ProductControllers()