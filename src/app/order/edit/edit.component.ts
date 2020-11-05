import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { FormGroup, FormBuilder } from '@angular/forms';

import { Product } from "../../models/Product";
import { Order } from "../../models/Order";
import { OrderService } from "../../order.service";
import { Item } from "../../models/Item";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  formOrder: FormGroup;
  selectedProduct: Product; 
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
      this.order.items.forEach(item => {
        let product = new Product();
        product.description = item.description;
        product.price = item.price;
        product.id = item.productId;
        product.amount = item.quantity;
        this.products.push(product);
    });
      //console.log(this.order);
      this.createForm(this.order);
    });
  }

  receiveProduct($event) {
    this.selectedProduct = $event
    this.products.push(this.selectedProduct);
  }

  deleteProduct(product): void{
    const index = this.products.indexOf( product );
    this.products.splice(index, 1);
  }


  createForm(order: Order){
    this.formOrder = this.formBuilder.group({
        description: [order.description],
        status: [order.status],
        userId: [order.userId],
        items: this.formBuilder.array([])
    })
  }

  onSubmit() {
    let currentOrder = this.formOrder.value as Order;

    this.products.forEach(product => {
        let item = new Item();
        item.description = this.selectedProduct.description;
        item.price = this.selectedProduct.price;
        item.productId = this.selectedProduct.id;
        item.quantity = this.selectedProduct.amount;
        currentOrder.items.push(item);
    });

    console.log(currentOrder);
    this.createForm(new Order());
  }

}
