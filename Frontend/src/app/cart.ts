export interface Cart {
    message: string,
    product:{
        id:number,
        title:string,
        price:number,
        imageUrl:string,
        description:string,
        createdAt:string,
        updatedAt:string,
        userId:number,
        cartItem:{
            id:number,
            quantity:number,
            createdAt:string,
            updatedAt:string,
            cartId:number,
            productId:number
        }
    }
}
