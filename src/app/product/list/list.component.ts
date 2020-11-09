import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Product } from '../../models/Product';
import { ProductService } from "../../product.service";

@Component({
  selector: 'app-products',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ProductsComponent implements OnInit {

  products : Product[];
  @Output() selectedProductEvent = new EventEmitter<Product>();

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void{
    this.productService.getProducts()
        .subscribe(products => this.products = products);
  }

  getProduct(product): void{
    this.selectedProductEvent.emit(product);
    //console.log(product);
  }

}
