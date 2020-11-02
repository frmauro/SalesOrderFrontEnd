import { ProductStatus } from "../models/ProductStatus";

export interface Product{
    id: number;
    description: string;
    amount: number;
    price: string;
    status: ProductStatus; 
}