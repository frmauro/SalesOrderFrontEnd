import { Component, OnInit } from '@angular/core';

import { UserService } from "../../user.service";
import { User } from "../../models/User";

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  currentUser: User;

  constructor(private userService: UserService) {
      this.userService.currentUser.subscribe(x => this.currentUser = x);
   }

  ngOnInit(): void {
  }

}
