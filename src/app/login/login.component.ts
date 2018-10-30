import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
import { AuthenticationService } from '../services/authentication.service';
>>>>>>> 1ec156c944d0412e1954a44d870ba47275ded51a
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
<<<<<<< HEAD
  constructor(private fb: FormBuilder, private router: Router) { }
=======
  constructor(private fb: FormBuilder, private authService: AuthenticationService) { }
>>>>>>> 1ec156c944d0412e1954a44d870ba47275ded51a

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      pwd: this.fb.control('', [Validators.required])
    });
  }

  onSubmit() {
    console.log(this.loginForm);
    this.authService.loginUser(this.loginForm.value).subscribe(
      (data) => console.log(data)
    );
  }

  register() {
    this.router.navigate(['/register']);
  }
}
