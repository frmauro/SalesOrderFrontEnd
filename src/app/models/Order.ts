import { OrderStatus } from "../models/OrderStatus";
import { Item } from "../models/Item";

export class Order{
    id: number;
    description: string;
    moment: string;
    orderStatus: number;
    userId: number;
    items: Item[];
}