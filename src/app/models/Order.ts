import { OrderStatus } from "../models/OrderStatus";
import { Item } from "../models/Item";

export class Order{
    id: number;
    description: string;
    moment: string;
    status: number;
    userId: number;
    items: Item[];
}
