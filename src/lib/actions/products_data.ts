import { db } from "~/server/db";

export interface ProductType{
    id: string;
    name: string | null;
    description: string | null;
    price: number | null;
    likes: number | null;
}

export interface ProductWithImagesType extends ProductType{
    productImageRelation: {
        productId: string | null;
        url: string | null;
    }[];
}

export interface ProductWithCategoryType extends ProductType{
    productCategoryRelation: {
        productId: string;
        productCategoryId: string;
    }[];
}

interface ProductDataProps{
    limit?: number;
    withImages?: boolean;
    withCategories?: boolean;
}

export async function getProductData({limit, withImages = false, withCategories = false}:ProductDataProps){
    let query: ProductType[] | ProductWithImagesType[] | ProductWithCategoryType[] = [];
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

