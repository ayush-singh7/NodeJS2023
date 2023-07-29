import { Request, Response } from "express";
import { AddressModel, ProductModel } from "../../db/models";
import { loggerMiddleWare } from "../../middlewares/logger";
import { Multer } from "../../utility/multer";

export const AddProduct = async (req: Request, res: Response) => {

    try {

        const { tokenData, product_name, description, base_price, category_id, address_id } = req.body;

        let productDetails = await ProductModel.create({
            user_id: tokenData.user_id,
            product_name: product_name,
            description: description,
            base_price: base_price,
            category_id: category_id,
            address_id: address_id
        })



        res.send(productDetails);
    } catch (e) {

        res.send(e)
    }

}

export const ViewProduct = async(req:Request, res:Response)=>{
    try{

    }catch(e){
        
    }
}



export const PlaceBid = async (req: Request, res: Response) => { //edge case of same user putting bid needs to be solved
    try {

        const { bid_amount, product_id, tokenData } = req.body;

        await ProductModel.increment(
            'current_price',
            {
                by: bid_amount,
                where: { product_id: product_id }
            }
        )
        await ProductModel.update(
            {
                bidder_id: tokenData.user_id
            },
            {
                where:{product_id: product_id}
            }
        )
            
        res.status(200).send("UPDATION SUCCESFULL")

    } catch (e) {
        res.status(400).send(e)
    }
}
