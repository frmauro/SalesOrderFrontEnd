import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Location } from "@angular/common";

import { Product } from "../../models/Product";
import { Order } from "../../models/Order";
import { OrderService } from "../../order.service";
import { ProductService } from "../../product.service";
import { UpdateAmountDto } from './dto/updateAcountDto';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  formOrder: FormGroup;
  products: Product[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private orderService: OrderService,
    private productService: ProductService,
    private location: Location) { }

  ngOnInit(): void {
    this.createForm(new Order());
  }

  receiveProduct($event: Product) {
    this.items.push(this.createItem($event.id.toString(), $event.description, $event.amount.toString(), $event.id.toString(), $event.price));
     //console.log(this.items);
  }

  deleteProduct(index: number): void{
    this.items.removeAt(index);
  }

  onSubmit() {
    let currentOrder = this.formOrder.value as Order;
    let usertmp = JSON.parse(localStorage.getItem("currentUser"));

    //currentOrder.userId = 1;
    currentOrder.userId = usertmp.id;
    //currentOrder.status = currentOrder.status;

    //console.log(currentOrder);
    let items: Array<UpdateAmountDto> = new Array();

    currentOrder.items.forEach(p => {
        let item = {
          quantity : parseInt(p.quantity.toString()),
          id : parseInt(p.productId.toString())
        };
        items.push(item);
    });

    this.orderService.addOrder(currentOrder).subscribe(() => {
      this.productService.updateAmount(items).subscribe(() => this.goBack())
    });

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

  goBack(): void {
    this.location.back();
  }


}
