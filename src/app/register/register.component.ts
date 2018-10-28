import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      uclass: this.fb.control('', Validators.required),
      phone: this.fb.control('', [Validators.required, Validators.minLength(10),
                         Validators.maxLength(10)]),
      password: this.fb.control('', [Validators.required])
    });
  }

  onSubmit() {
    console.log(this.registerForm);
  }
}
