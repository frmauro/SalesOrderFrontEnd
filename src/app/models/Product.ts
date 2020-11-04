import { ProductStatus } from "../models/ProductStatus";

export class Product{
    id: number;
    description: string;
    amount: number;
    price: string;
    status: ProductStatus; 
}