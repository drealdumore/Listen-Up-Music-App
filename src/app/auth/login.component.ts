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
  isAuthenticated: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    //Login Email
    this.email = new FormControl(null, [Validators.required, Validators.email]);

    //Login password
    this.password = new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
    ]);

    //Login form names/initializers
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password,
    });

    //To check if user is authenticated
    this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
    });
  }

  //Login Function
  login() {
    //To assign the form values to an object and use the object once instead
    // of writing the values for both email and password, just use an object and put both value
    const userData = Object.assign(this.loginForm.value, {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    });
    // login function from authservice
    this.authService
      .login(userData)
      .then((res: any) => {
        this.toastr.success('Sign in Successful!');
        setTimeout(() => {
          this.router.navigate(['/playlist']);
        }, 200);
      })
      .catch((error: any) => {
        this.toastr.error('error');
      });
  }

  // signInWithGoogle function from authservice
  signInWithGoogle() {
    this.authService
      .signInWithGoogle()
      .then((res: any) => {
        this.toastr.success('Google Signin Successful!');
        setTimeout(() => {
          this.router.navigate(['/playlist']);
        }, 200);
      })
      .catch((error: any) => {
        this.toastr.error(error);
      });
  }

  // to close login modal
  closeModal() {
    this.router.navigate(['/playlist']);
  }

  // to route to signup page if user wants to sign up
  goToSignUp() {
    setTimeout(() => {
      this.router.navigate(['/auth/signup']);
    }, 200);
  }
}
