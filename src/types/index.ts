export interface ApiResponse<T> {
    message?: string;
    data: T;
}

export interface Dish {
    id: string,
    stock: "Sold Out" | "Available",
    category: string,
    image?: string,
    name: string,
    price: number,
}

export interface Cart {
    id: string,
    dishId: string,
    quantity: number,
    price: number,
}

export interface Order {
    
}