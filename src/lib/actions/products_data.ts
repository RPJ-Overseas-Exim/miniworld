import { db } from "~/server/db";
import {type productType} from "../types/Product";
import { product, productCategory, productsToCategories, productImage } from "~/server/db/schema";
import { and, asc, desc, eq, gte, ilike, like, lte } from "drizzle-orm";

interface ProductDataProps{
    name?: string;
    limit?: number;
    category?: string;
    orderBy?: string;
    ascending?: boolean;
    maxPrice?: number;
    minPrice?: number;
    page?: number;
}

export async function getProductDetails({
    page = 0,
    limit = 100,
    category = "",
    orderBy = "name",
    ascending = true,
    minPrice = 0,
    maxPrice = 10000,
    name = "",
}:ProductDataProps){

        let result: productType[] = []
        let totalResult = 0

        try{

            // get all the data
            const rows = await db.select().from(product)
                .innerJoin(productsToCategories, eq(productsToCategories.productId, product.id))
                .innerJoin(productCategory, eq(productCategory.id, productsToCategories.productCategoryId))
                .leftJoin(productImage, eq(productImage.productId, product.id))
                .where(
                    and(
                        like(productCategory.name, `%${category}%`),
                        gte(product.price, minPrice),
                        lte(product.price, maxPrice),
                        ilike(product.name, `%${name}%`),
                    )
                )
                .orderBy(getOrderBy(orderBy, ascending))

            // reduce the data 
            rows.reduce<Record<string, productType>>(
                (acc, row)=>{
                    const product = row.product
                    const image = row.product_image
                    //const category = row.product_category

                    // add the new row in data
                    if(!acc[product.id]){
                        const productDetail = {
                            id: product.id,
                            name: product.name,
                            description: product.description,
                            likes: product.likes,
                            price: product.price,
                            productImageRelation: [],
                            productCategoryRelation: [],
                            rating: product.rating,
                        }

                        acc[product.id] = productDetail
                        totalResult += 1

                        result.push(productDetail)
                    }

                    // add image to the existing row in data
                    if(image?.url){
                        acc[product.id]?.productImageRelation?.push({
                            productId: product.id,
                            url: image.url,
                        })
                    }

                    return acc
                },
                {}
            )

        }catch(err){
            console.log(err)
        }

        result = result.slice((page-1)*limit, (page-1)*limit + limit)
        return { products: result, totalResult, returnResult: result.length }
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

export async function searchProduct(name: string){
    let result: productType[] = [];

    try{
        result = await db.select().from(product)
            .where(like(product.name, name))
            .orderBy(desc(product.price))
            .limit(5);

        return result
    }catch(err){
        console.log(err)
    }

    return result
}
