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
    // Sign form
    this.userMail = new FormControl('', [Validators.required]);
    this.nickName = new FormControl(null, [Validators.required]);
    this.userKey = new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
    ]);

    // signup form initializers/ name
    this.signUpForm = new FormGroup({
      userMail: this.userMail,
      nickName: this.nickName,
      userKey: this.userKey,
    });
  }


  
  showPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  
  setNickname() {
    const newNickname = this.nickName.value;

    if (this.nickName.valid && newNickname.trim() !== '') {
      this.authService.setDisplayName(newNickname);
    }
  }

  // to close signup modal
  closeModal() {
    this.router.navigate(['/playlist']);
  }

  // to route to login page
  goToLogin() {
    setTimeout(() => {
      this.router.navigate(['/auth/login']);
    }, 200);
  }

  // to register
  register() {
    //To assign the form values to an object and use the object once instead
    // of writing the values for both email and password, just use an object and put both value

    const userData = Object.assign(this.signUpForm.value, {
      email: this.signUpForm.value.userMail,
      password: this.signUpForm.value.userKey,
    });

    // register function from authservice
    this.authService
      .register(userData)
      .then((res: any) => {
        this.toastr.success('Sign up Successful!');
        setTimeout(() => {
          this.toastr.info(`Sign in with your Email and Password`);
        }, 2000);
        setTimeout(() => {
          this.router.navigate(['/auth/login']);
        }, 1000);
      })
      .catch((error: any) => {
        this.toastr.error(error);
      });
    this.setNickname();
  }

  // signInWithGoogle function from authservice
  signInWithGoogle() {
    this.authService
      .signInWithGoogle()
      .then((res: any) => {
        this.toastr.success('Google SignUp Successful!');
        setTimeout(() => {
          this.router.navigate(['/playlist']);
        }, 2000);
      })
      .catch((error: any) => {
        this.toastr.error(error);
      });
  }
}
