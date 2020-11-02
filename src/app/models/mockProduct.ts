import { Product } from "../models/Product";
import { ProductStatus } from "../models/ProductStatus";

export const PRODUCTS : Product[] = [
    {id: 1, description: 'Product 001', amount: 200, price: '100', status: ProductStatus.Active},
    {id: 2, description: 'Product 002', amount: 220, price: '110', status: ProductStatus.Active},
    {id: 3, description: 'Product 003', amount: 240, price: '120', status: ProductStatus.Active},
    {id: 4, description: 'Product 004', amount: 260, price: '130', status: ProductStatus.Active},
    {id: 5, description: 'Product 005', amount: 280, price: '140', status: ProductStatus.Active},
    {id: 6, description: 'Product 006', amount: 300, price: '150', status: ProductStatus.Active},
    {id: 7, description: 'Product 007', amount: 400, price: '160', status: ProductStatus.Active},
    {id: 8, description: 'Product 008', amount: 100, price: '170', status: ProductStatus.Active},
    {id: 9, description: 'Product 009', amount: 210, price: '180', status: ProductStatus.Active},
    {id: 10, description: 'Product 010', amount: 290, price: '190', status: ProductStatus.Active}
];