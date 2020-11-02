import { Component, OnInit } from '@angular/core';

import { Order } from "../../models/Order";
import { OrderService } from "../../order.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  orders : Order[];

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.orderService.getOrders()
      .subscribe(orders => this.orders = orders );
  }

}
