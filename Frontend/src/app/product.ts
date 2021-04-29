export interface Product {
    message:string,
    totalItems:{
        count:number,
        rows:[{
            id: number,
            title: string,
            price: number,
            imageUrl: string,
            description: string,
            createdAt: string,
            updatedAt: string,
            userId: number
        }]
    }
}
