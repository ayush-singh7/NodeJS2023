import { Request, Response } from "express";
import { AddressModel, ProductModel } from "../../db/models";
import { loggerMiddleWare } from "../../middlewares/logger";

export const AddProduct = async(req:Request,res:Response)=>{

    try{

        const {tokenData, product_name, description,  base_price, category_id, address_id } = req.body;
        

        let productDetails  = await ProductModel.create({
            user_id: tokenData.user_id,
            product_name:product_name,
            description:description,
            base_price:base_price,
            category_id:category_id,
            address_id:address_id
        })
        
        res.send(productDetails);
    }catch(e){
        
        res.send(e)        
    }
    
}


export const AddAddress = async(req:Request, res:Response)=>{
    try{
        const {tokenData, house_number, street_number, area, landmark, city, state, zipcode, status } = req.body;
        let addressDetails = await AddressModel.create({
            user_id:tokenData.user_id,
            house_number:house_number,
            street_number:street_number,
            area:area,
            landmark:landmark,
            city:city,
            state:state,
            zipcode:zipcode,
            status:status
        })

        res.status(200).send(addressDetails);

    }catch(e){
        res.send(e);
    }
}