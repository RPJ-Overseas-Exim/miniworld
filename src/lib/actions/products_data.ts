import { db } from "~/server/db";
import {productType} from "../types/Product";
import { product } from "~/server/db/schema";
import { asc, desc } from "drizzle-orm";

interface ProductDataProps{
    limit?: number;
    category?: string;
    withImages?: boolean;
    withCategories?: boolean;
    orderBy?: string;
    ascending?: boolean;
}

export async function getProductData({
    limit,
    category,
    withImages = false,
    withCategories = false,
    orderBy = "name",
    ascending = true,
}:ProductDataProps){
    let query: productType[] = [];
    try{

        query = await db.query.product.findMany({
            with: {
                ...(withImages && {productImageRelation: true}),
                ...(withCategories && {productCategoryRelation: true}),
            },
            ...(limit && {limit: limit}),
            ...(category && withCategories && {}),
            orderBy: getOrderBy(orderBy, ascending),
        })

    }catch(err){
        console.log("In product data: ", err)
    }

    return query;
}

function getOrderBy(value: string, ascending: boolean){
  if(value === "price"){
    return ascending ? asc(product.price) : desc(product.price)
  }else if(value === "likes"){
    return ascending ? asc(product.likes) : desc(product.likes)
  }else{
    return ascending ? asc(product.name) : desc(product.name)
  }
}
