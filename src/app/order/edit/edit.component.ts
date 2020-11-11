import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

import { Product } from "../../models/Product";
import { Order } from "../../models/Order";
import { OrderService } from "../../order.service";
import { ItemStatus } from "../../models/ItemStatus";


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  formOrder: FormGroup;
  products: Product[] = [];
  order: Order;

  listStatus: ItemStatus[] =   [
      new ItemStatus(1, "WAITING_PAYMENT"),
      new ItemStatus(2, "PAID"),
      new ItemStatus(3, "SHIPPED"),
      new ItemStatus(4, "DELIVERED"),
      new ItemStatus(5, "CANCELED"),
    ];


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
       //console.log(this.order);
       this.createForm(this.order);
      //console.log(this.formOrder);
      
      this.formOrder.controls.listStatus.setValue(this.order.orderStatus);

      this.order.items.forEach(item => {
        this.items.push(this.createItem(item.productId.toString(), item.description, item.quantity.toString(), item.productId.toString(), item.price));
       });
       //console.log(this.items);
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
        id: [order.id],
        description: [order.description],
        orderStatus: [order.orderStatus],
        userId: [order.userId],
        listStatus: [this.listStatus],//this.formBuilder.array([]),
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

  // Choose status using select dropdown
  changeStatus(e) {
     console.log(e.target);
     this.formOrder.patchValue(e.target.value);
  }

  goBack(): void {
    this.location.back();
  }

}
