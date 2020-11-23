import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';

import { User } from "./models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  private usersUrl = 'http://localhost:8088';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }


  getUserByEmailAndPassword(email: string, password: string): Observable<User> {
    const url = `${this.usersUrl}/user`;
    let  user = new User();
    user.email = email;
    user.password = password;

     return this.http.post<User>(url, user, this.httpOptions).pipe(
      map(res => {
        //console.log(res);
         let objJson = JSON.stringify(res);
         if (objJson === '"user not exists"'){
              let currentUser = new User();
              currentUser.status = "user not exists";
              return currentUser;
          }else{
            let listObj = JSON.parse(objJson);
            let currentUser = listObj[0] as User;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            return user;
          }
      }),
      tap(_ => this.log(`fetched user email=${email} password=${password}`)),
      catchError(this.handleError<User>(`getUserByEmailAndPassword email=${email} password=${password}`))
     );
  }

  logout() {
     // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
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
