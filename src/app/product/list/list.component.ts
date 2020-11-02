import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/Product';
import { ProductStatus } from '../../models/ProductStatus';

import { ProductService } from "../../product.service";

@Component({
  selector: 'app-products',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ProductsComponent implements OnInit {

  products : Product[];

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

}
