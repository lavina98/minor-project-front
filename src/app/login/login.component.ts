import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      pwd: this.fb.control('', [Validators.required])
    });
  }

  onSubmit() {
    console.log(this.loginForm);
    this.userService.loginUser(this.loginForm.value).subscribe(
      (data) => console.log(data)
    );
  }

}
