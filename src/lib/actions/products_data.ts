import { db } from "~/server/db";
import {productType} from "../types/Product";

interface ProductDataProps{
    limit?: number;
    withImages?: boolean;
    withCategories?: boolean;
}

export async function getProductData({limit, withImages = false, withCategories = false}:ProductDataProps){
    let query: productType[] = [];
    try{

        query = await db.query.product.findMany({
            with: {
                ...(withImages && {productImageRelation: true}),
                ...(withCategories && {productCategoryRelation: true}),
            },
            ...(limit && {limit: limit}),
        })

    }catch(err){
        console.log("In product data: ", err)
    }

    return query;
}

