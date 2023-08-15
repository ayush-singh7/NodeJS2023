import { Router, Request, Response } from 'express';
import { ProductModel, UserModel } from "../database/models"

class ProductServices {

    constructor() {
    }

    async fetchProducts(queryParams: any) {
        const { price, brand, rating } = queryParams;
        console.log();

        try {
            let pipeline: any = [];

            console.log(pipeline, '---A:PT');

            if (brand) {
                pipeline.push({ $match: { brand: brand } });
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
                $project:{_id:0}
            })

            let products = await ProductModel.aggregate(pipeline);
            console.log(products, '-----');

            return products;
        } catch (e) {
            console.log(e, '----');

            return e;
        }

    }

}

export const productServices = new ProductServices()