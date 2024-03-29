import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";

import { User } from "../models/User";
import { UserService } from "../user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  user: User;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService
    ) { }

  ngOnInit(): void {
    this.createForm(new User());
    this.isLogged();
  }

  getUserByEmailAndPassword(email: string, password: string): void{
    this.userService.getUserByEmailAndPassword(email, password)
        .subscribe(user => this.user = user);
  }

  createForm(user: User){
    this.formLogin = this.formBuilder.group({
        email: [user.email],
        password: [user.password]
    })
  }

  onSubmit() {
    let currentUser = this.formLogin.value as User;
    //console.log(currentUser);
    this.userService.getUserByEmailAndPassword(currentUser.email, currentUser.password)
    .subscribe(obj => {
      //console.log(obj);
      if (obj.token === "" || obj.token === "undefined"){
          this.router.navigate(['/login']);
      }else{
          this.router.navigate(['/orders'])
            .then(() => {
              window.location.reload();
            });
      }
    });
    this.createForm(new User());
  }


  isLogged() :void{
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
        //authorised so return true
        this.router.navigate(['/orders']);
    }
  }

}
