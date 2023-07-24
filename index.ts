import express, { Request, Response } from "express";
import { connection } from "./connection";
import { ProductModel } from "./ProductMode";
const app = express()


app.get('/products', async (req: Request, res: Response) => {

    try {
        let { gender, price, rating, color } = req.query;

        let queryArray = [];

        if (color) {
            let colorQuery = {
                $match: { color: color }
            }
            queryArray.push(colorQuery)
        }

        if (price) {
            let [startPrice, endPrice] = price.toString().split('to')
            let priceQuery = {
                $match: {
                    price: { $gte: Number(startPrice), $lt: Number(endPrice) }
                }
            }
            queryArray.push(priceQuery);
        }

        if(gender){
            let genderQuery = {
                $match: { gender:gender}
            }
            queryArray.push(genderQuery);
        }

        if(rating){
            let [startRating, endRating] = rating.toString().split('to')
            let ratingQuery = {
                $match: {
                    price: { $gte: Number(startRating), $lt: Number(endRating) }
                }
            }
            queryArray.push(ratingQuery);

        }

        let products = await ProductModel.aggregate(queryArray);
        res.send(products)

    } catch (e) {
        console.log(e);
    }

})

app.listen(4500, () => {
    console.log('listening on port 4500');
    connection()
})