import { db } from "~/server/db";
import {productType} from "../types/Product";
import { product, productCategory, productsToCategories, productImage } from "~/server/db/schema";
import { asc, desc, eq, like } from "drizzle-orm";

interface ProductDataProps{
    limit?: number;
    category?: string;
    withImages?: boolean;
    withCategories?: boolean;
    orderBy?: string;
    ascending?: boolean;
}

export async function getProductDetails({
    limit = 100,
    category = "",
    orderBy = "name",
    ascending = true,
}:ProductDataProps){

<<<<<<< HEAD
        const result: productType[] = []
        let totalResult = 0
        let returnResult = 0
=======
        const result: productType[]= []
        let totalResult= 0
        let returnResult= 0
>>>>>>> d9e5e72 (switched the product carousel to embla carousel)

        try{

            // get all the data
            const rows = await db.select().from(product)
                .innerJoin(productsToCategories, eq(productsToCategories.productId, product.id))
                .innerJoin(productCategory, eq(productCategory.id, productsToCategories.productCategoryId))
                .leftJoin(productImage, eq(productImage.productId, product.id))
                .where(like(productCategory.name, `%${category}%`))
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
                        }

                        acc[product.id] = productDetail
                        totalResult += 1

                        if(returnResult < limit){
                            returnResult += 1
                            result.push(productDetail)
                        }
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

        return { products: result, totalResult, returnResult }
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
