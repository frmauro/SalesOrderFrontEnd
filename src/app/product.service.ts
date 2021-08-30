import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';

import { Product } from "./models/Product";
//import { PRODUCTS } from "./models/mockProduct";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //private productsUrl = 'http://localhost:8070/products';  // URL to web api
  private productsUrl = 'http://192.168.49.2:31007/products'; // URL to web api cluster minikube

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    //return of(PRODUCTS);
    return this.http.get<Product[]>(this.productsUrl).pipe(
      tap((_) => this.log('fetched products')),
      catchError(this.handleError<Product[]>('getProducts', []))
    );
  }

  getProductById(id: number): Observable<Product> {
    //let order = ORDERS.find((o) => o.id === id);
    //return of(order);
    const url = `${this.productsUrl}/${id}`;
     return this.http.get<Product>(url).pipe(
      tap(_ => this.log(`fetched product id=${id}`)),
      catchError(this.handleError<Product>(`getProduct id=${id}`))
     );
  }

    /** POST: add a new order to the server */
updateAmount(products: Product[]): Observable<Product[]> {
  const url = "http://localhost:8070/products";
  let arrProducts = JSON.stringify(products);
  return this.http.post<Product[]>(url, arrProducts, this.httpOptions).pipe(
    tap((_) => this.log("update amount products")),
    catchError(this.handleError<Product[]>("updateAmount"))
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
