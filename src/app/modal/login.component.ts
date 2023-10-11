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
  private userName!: FormControl;
  private password!: FormControl;

  constructor(
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

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
    const userData = Object.assign(this.loginForm.value, {
      email: this.loginForm.value.userMail,
      password: this.loginForm.value.userKey,
    });
    console.log(userData);

    this.authService
      .login(userData)
      .then((res: any) => {
        this.toastr.success('Login Successful!');
        this.router.navigate(['/playlist']);
      })
      .catch((error: any) => {
        this.toastr.error('error');
        console.error(error);
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

  signInWithGoogle() {
    this.authService
      .signInWithGoogle()
      .then((res: any) => {
        this.router.navigate(['/playlist']);
      })
      .catch((error: any) => {
        console.error(error);
      });
  }
}
