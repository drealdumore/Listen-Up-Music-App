import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;
  private userMail!: FormControl;
  private nickName!: FormControl;
  private userKey!: FormControl;

  constructor(
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    // Sign Up
    this.userMail = new FormControl('', [Validators.required]);
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
    this.router.navigate(['/playlist']);
  }

  goToLogin() {
    setTimeout(() => {
      this.router.navigate(['/auth/login']);
    }, 200);
  }

  register() {
    const userData = Object.assign(this.signUpForm.value, {
      email: this.signUpForm.value.userMail,
      password: this.signUpForm.value.userKey,
    });

    this.authService
      .register(userData)
      .then((res: any) => {
        this.router.navigate(['/playlist']);
      })
      .catch((error: any) => {
        this.toastr.success('error');
        console.error(error);
      });
  }
}
