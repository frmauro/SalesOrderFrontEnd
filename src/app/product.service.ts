import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';

import { Product } from "./models/Product";
import { UpdateAmountDto } from './order/create/dto/updateAcountDto';
//import { PRODUCTS } from "./models/mockProduct";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //private productsUrl = 'http://localhost:8070/products';  // URL to web api
  //private productsUrl = 'http://192.168.49.2:31007/products'; // URL to web api cluster minikube
  //private productsUrl = 'http://localhost:5158/'; // URL to localhost apigetway
  private productsUrl = 'http://salesorder.com/'; // URL to cluster minikube apigetway

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    const url =   `${this.productsUrl}GetAllProduct`;
    //return of(PRODUCTS);
    return this.http.get<Product[]>(url).pipe(
      tap((_) => this.log('fetched products')),
      catchError(this.handleError<Product[]>('getProducts', []))
    );
  }

  getProductById(id: number): Observable<Product> {
    //let order = ORDERS.find((o) => o.id === id);
    //return of(order);
    const url = `${this.productsUrl}GetProductById/${id}`;
     return this.http.get<Product>(url).pipe(
      tap(_ => this.log(`fetched product id=${id}`)),
      catchError(this.handleError<Product>(`getProduct id=${id}`))
     );
  }

    /** POST: add a new order to the server */
updateAmount(products: UpdateAmountDto[]): Observable<UpdateAmountDto[]> {
  const url =   `${this.productsUrl}UpdateAmount`;
  let dto = {
    items: products
  };
  let dtojson = JSON.stringify(dto);
  return this.http.post<UpdateAmountDto[]>(url, dtojson, this.httpOptions).pipe(
    tap((_) => this.log("update amount products")),
    catchError(this.handleError<UpdateAmountDto[]>("updateAmount"))
  );
}


    /** Log a OrderService message with the MessageService */
    private log(message: string) {
      //this.messageService.add(`orderService: ${message}`);
      console.log(`productService: ${message}`);
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
}
