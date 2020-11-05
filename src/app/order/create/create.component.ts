import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

import { Product } from "../../models/Product";
import { Order } from "../../models/Order";
import { Item } from "../../models/Item";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  formOrder: FormGroup;

  selectedProduct: Product; 
  products: Product[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm(new Order());
  }

  receiveProduct($event) {
    this.selectedProduct = $event
    this.items.push(new FormControl(
      { id: this.selectedProduct.id, description: this.selectedProduct.description }
    ));
    //this.products.push(this.selectedProduct);
  }

  deleteProduct(product): void{
    const index = this.products.indexOf( product );
    this.products.splice(index, 1);
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

  createForm(order: Order){
    this.formOrder = this.formBuilder.group({
        description: [order.description],
        status: [order.status],
        userId: [order.userId],
        items: this.formBuilder.array([])
    })
  }

  get items(): FormArray {
    return this.formOrder.get('items') as FormArray;
  }

  
}
