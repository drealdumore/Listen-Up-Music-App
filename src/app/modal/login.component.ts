import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
// import { AuthService } from '../shared/auth.service';

@Component({
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  email: string = '';
  pass: string = '';
  mouseoverLogin: any;
  loginForm!: FormGroup;
  private userName: FormControl | any;
  private password: FormControl | any;
  hasAccount: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    //Login Form
    this.userName = new FormControl(null, [
      Validators.required,
      Validators.email,
    ]);

    this.password = new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
    ]);

    this.loginForm = new FormGroup({
      userName: this.userName,
      password: this.password,
    });
  }

  login() {
    this.authService.login(this.loginForm.value);
  }

  closeModal() {
    this.router.navigate(['/home']);
  }

  goToSignUp() {
    setTimeout(() => {
      this.router.navigate(['/auth/signup']);
    }, 200);
  }
}
