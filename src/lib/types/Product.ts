type productType = {
    id: string,
    name: string,
    description: string,
    price: number,
    likes: number,
    productImageRelations: {
        id:string
        url:string
    }[]
}
