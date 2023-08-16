import { Router, Request, Response } from 'express';
import { ProductModel, UserModel } from "../database/models"
import { PipelineStage, UpdateWithAggregationPipeline } from 'mongoose';

class ProductServices {

    constructor() {
    }

    async fetchProducts(queryParams: any) {
        const { price, brand, rating,category } = queryParams;
        console.log();

        try {
            let pipeline:any = [];

            if (category) {
                let brandObj:PipelineStage = {
                    $match: {
                      "categoryData.categoryId": { $in: [+category] }
                    }
                  }
                pipeline.push(brandObj)
            }

            if(rating){
                let [start,end] = rating.split('-')
                pipeline.push({ $match: {rating: {$gte:+start, $lt:+end} } })   
            }

            if (price) {
                let priceSort = {
                    $sort: {
                        price: +price
                    }
                }
                pipeline.push(priceSort);
            }
            
            pipeline.push({
                $match : {
                    _id: {
                        $ne : null
                    }
                }
            })

            let products = await ProductModel.aggregate(pipeline);
            return products;
        } catch (e) {

            return e;
        }

    }

}

export const productServices = new ProductServices()