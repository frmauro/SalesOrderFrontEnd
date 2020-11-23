import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from "../../user.service";
import { User } from "../../models/User";

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  currentUser: User;

  constructor(private router: Router, private userService: UserService) {
      this.userService.currentUser.subscribe(x => this.currentUser = x);
   }

  ngOnInit(): void {
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
}

}
