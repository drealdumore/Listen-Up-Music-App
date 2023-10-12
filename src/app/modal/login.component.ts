import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  mouseoverLogin: any;
  loginForm!: FormGroup;
  private email!: FormControl;
  private password!: FormControl;

  constructor(
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    //Login Form
    this.email = new FormControl(null, [
      Validators.required,
      Validators.email,
    ]);

    this.password = new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
    ]);

    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password,
    });
  }

  login() {
    const userData = Object.assign(this.loginForm.value, {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    });

    this.authService
      .login(userData)
      .then((res: any) => {
        this.toastr.success('Sign in Successful!');
        setTimeout(() => {
          this.router.navigate(['/playlist']);
        }, 2000);
      })
      .catch((error: any) => {
        this.toastr.error('error');
      });
  }

  signInWithGoogle() {
    this.authService
      .signInWithGoogle()
      .then((res: any) => {
        this.toastr.success('Google Signin Successful!');
        setTimeout(() => {
          this.router.navigate(['/playlist']);
        }, 2000);
      })
      .catch((error: any) => {
        this.toastr.error(error);
      });
  }

  closeModal() {
    this.router.navigate(['/playlist']);
  }

  goToSignUp() {
    setTimeout(() => {
      this.router.navigate(['/auth/signup']);
    }, 200);
  }
}
