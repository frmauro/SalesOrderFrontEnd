import { Component, OnInit } from '@angular/core';

//import { ProductsComponent } from "../../product/list/list.component";
import { Product } from "../../models/Product";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  selectedProduct: Product; 
  products: Product[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  receiveProduct($event) {
    this.selectedProduct = $event
    this.products.push(this.selectedProduct);
    //console.log(this.selectedProduct);
  }

}
