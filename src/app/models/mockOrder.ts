import { Order } from "../models/Order";
import { OrderStatus } from "../models/OrderStatus";
import { Item } from "../models/Item";

export const ORDERS :  Order[] = [
    { id: 6, description: "Order 001", moment: "2020-07-20T19:53:07Z", status: OrderStatus.WAITING_PAYMENT, userId: 1, items: [] },
    { id: 7, description: "Order 002", moment: "2020-08-20T19:53:07Z", status: OrderStatus.WAITING_PAYMENT, userId: 1, items: [] },
    { id: 8, description: "Order 003", moment: "2020-09-20T19:53:07Z", status: OrderStatus.WAITING_PAYMENT, userId: 1, items: [] },
    { id: 9, description: "Order 004", moment: "2020-06-20T19:53:07Z", status: OrderStatus.WAITING_PAYMENT, userId: 1, items: [] },
];