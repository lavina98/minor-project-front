import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private userService: UserService) { }
  user: any;
  ngOnInit() {
     this.userService.getUserDetails().subscribe(
       (data) => this.user = data
     );
  }

}
