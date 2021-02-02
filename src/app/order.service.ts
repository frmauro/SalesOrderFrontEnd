import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

//import { ORDERS } from './models/mockOrder';
import { Order } from './models/Order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private orderUrl = 'http://localhost:8070/orders/'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    //return of(ORDERS);
    return this.http.get<Order[]>(this.orderUrl).pipe(
      tap((_) => this.log('fetched orders')),
      catchError(this.handleError<Order[]>('getOrders', []))
    );
  }

  getOrderById(id: number): Observable<Order> {
    //let order = ORDERS.find((o) => o.id === id);
    //return of(order);
    const url = `${this.orderUrl}/${id}`;
     return this.http.get<Order>(url).pipe(
      tap(_ => this.log(`fetched order id=${id}`)),
      catchError(this.handleError<Order>(`getOrder id=${id}`))
     );
  }

  /** POST: add a new order to the server */
addOrder(order: Order): Observable<Order> {
  return this.http.post<Order>(this.orderUrl, order, this.httpOptions).pipe(
    tap((newOrder: Order) => this.log(`added order w/ id=${order.id}`)),
    catchError(this.handleError<Order>('addOrder'))
  );
}

/** PUT: update the order on the server */
updateOrder(order: Order): Observable<any> {
  //console.log(order);
  return this.http.put(`${this.orderUrl}/${order.id}`, order, this.httpOptions).pipe(
    tap(_ => this.log(`updated order id=${order.id}`)),
    catchError(this.handleError<any>('updateOrder'))
  );
}

  /** Log a OrderService message with the MessageService */
  private log(message: string) {
    //this.messageService.add(`orderService: ${message}`);
    console.log(`orderService: ${message}`);
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
