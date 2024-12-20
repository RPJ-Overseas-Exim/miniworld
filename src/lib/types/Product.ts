export type productType = {
    id: string | null,
    name: string | null,
    description: string | null,
    price: number | null,
    likes: number | null,
    rating: number | null,
    productImageRelation?: {
        productId:string | null;
        url:string | null;
    }[];
    productCategoryRelation?: {
        productId: string;
        productCategoryId: string;
    }[];
}
