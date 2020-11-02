import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from "rxjs";

import { Product } from "./models/Product";
import { PRODUCTS } from "./models/mockProduct";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }
}
