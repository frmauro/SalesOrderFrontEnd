import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from "rxjs";

import { ORDERS } from "./models/mockOrder";
import { Order } from "./models/Order";
import { OrderStatus } from "./models/OrderStatus";


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getOrders(): Order[]{
    return ORDERS;
  }

}
