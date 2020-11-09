import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

import { Product } from "../../models/Product";
import { Order } from "../../models/Order";
import { OrderService } from "../../order.service";


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  formOrder: FormGroup;
  products: Product[] = [];
  order: Order;

  listStatus: string[] = ["WAITING_PAYMENT", "PAID", "SHIPPED", "DELIVERED", "CANCELED"];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.orderService.getOrderById(id)
    .subscribe(o => {
      this.order = o;
      this.createForm(this.order);
      this.order.items.forEach(item => {
        this.items.push(this.createItem(item.productId.toString(), item.description, item.quantity.toString(), item.productId.toString(), item.price));
       });
       console.log(this.items);
    });
  }

  receiveProduct($event: Product) {
    this.items.push(this.createItem($event.id.toString(), $event.description, $event.amount.toString(), $event.id.toString(), $event.price));
  }

  deleteProduct(index: number): void{
    this.items.removeAt(index);
  }


  createForm(order: Order){
    this.formOrder = this.formBuilder.group({
        description: [order.description],
        orderStatus: [order.status],
        userId: [order.userId],
        items: this.formBuilder.array([])
    })
  }

  createItem(id: string, description: string, quantity: string, productId: string, price: string): FormGroup {
    return this.formBuilder.group({
      id: id,
      description: description,
      quantity: quantity,
      productId: productId,
      price: price
    });
  }

  get items(): FormArray {
    return this.formOrder.get('items') as FormArray;
  }

  onSubmit() {
    let currentOrder = this.formOrder.value as Order;
    //console.log(currentOrder);
    this.orderService.updateOrder(currentOrder).subscribe(() => this.goBack());
    this.createForm(new Order());
  }

  goBack(): void {
    this.location.back();
  }

}
