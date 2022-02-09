import { Component, OnInit } from '@angular/core';

import { Order } from "../../models/Order";
import { OrderService } from "../../order.service";
import { OrderVM } from './dto/OrderVM';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  //orders : Order[];
  orders :OrderVM[] = [];

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.orderService.getOrders()
      .subscribe(orders => {
        orders.forEach(order => {
            var orderVm = new OrderVM();
            orderVm.description = order.description;
            orderVm.id = order.id.toString();
            orderVm.moment = order.moment;
                  if (order.status === 1){
                      orderVm.orderStatus = "WAITING_PAYMENT"
                  }
                  if (order.status === 2){
                    orderVm.orderStatus = "PAID"
                  }
                  if (order.status === 3){
                    orderVm.orderStatus = "SHIPPED"
                  }
                  if (order.status === 4){
                    orderVm.orderStatus = "DELIVERED"
                  }
                  if (order.status === 5){
                    orderVm.orderStatus = "CANCELED"
                  }
                  this.orders.push(orderVm);
        });

      });
  }

}
