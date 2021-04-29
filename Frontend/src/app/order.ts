export interface Order {
    message:string,
    order:[{
        id: number,
        createdAt: string,
        updatedAt: string,
        userId: number,
        products:[{
            id: number,
            title: string,
            price: number,
            imageUrl: string,
            description: string,
            createdAt: string,
            updatedAt: string,
            userId: number,
            orderItem:{
                id: number,
                quantity: number,
                createdAt: string,
                updatedAt: string,
                orderId: number,
                productId: number
            }
        }]
    }]
    
}
