import { OrderStatus } from "../models/OrderStatus";
import { Item } from "../models/Item";

export interface Order{
    id: number;
    description: string;
    moment: string;
    status: OrderStatus;
    userId: number;
    items: Item[];
}