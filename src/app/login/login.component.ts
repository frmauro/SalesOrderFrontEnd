import { Component, OnInit } from '@angular/core';

import { User } from "../models/User";
import { UserService } from "../user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  getUserByEmailAndPassword(email: string, password: string): void{
    this.userService.getUserByEmailAndPassword(email, password)
        .subscribe(user => this.user = user);
  }

}
