import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit {
  mouseoverLogin: any;
  loginForm!: FormGroup;
  private userName: FormControl | any;
  private password: FormControl | any;

  signUpForm!: FormGroup;
  private userMail!: FormControl;
  private nickName!: FormControl;
  private userKey!: FormControl;
  hasAccount: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    //Login
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

    // Sign Up
    this.userMail = new FormControl(null, [
      Validators.required,
      Validators.email,
    ]);
    this.nickName = new FormControl(null, [Validators.required]);
    this.userKey = new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
    ]);

    this.signUpForm = new FormGroup({
      userMail: this.userMail,
      nickName: this.nickName,
      userKey: this.userKey,
    });
  }

  closeModal() {
    this.router.navigate(['/home']);
  }

  goToSignUp() {
    setTimeout(() => {
      this.hasAccount = true;
    }, 200);
  }

  goToLogin() {
    setTimeout(() => {
      this.hasAccount = false;
    }, 200);
  }

  submit() {
    this.router.navigate(['/playlist']);
  }
}
