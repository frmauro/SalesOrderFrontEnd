import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

import { Product } from "../../models/Product";
import { Order } from "../../models/Order";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  formOrder: FormGroup;
  products: Product[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm(new Order());
  }

  receiveProduct($event) {
    this.items.push(this.createItem($event.id.toString(), $event.description, $event.amount.toString()));
     console.log(this.items);
  }

  deleteProduct(index: number): void{
    this.items.removeAt(index);
  }

  onSubmit() {
    let currentOrder = this.formOrder.value as Order;
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


  createItem(id: string, description: string, quantity: string): FormGroup {
    return this.formBuilder.group({
      id: id,
      description: description,
      quantity: quantity
    });
  }

  get items(): FormArray {
    return this.formOrder.get('items') as FormArray;
  }

  
}
