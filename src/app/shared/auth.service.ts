import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private auth: Auth) {}

  /// Login
  login(value: any) {
    signInWithEmailAndPassword(this.auth, value.email, value.password)
      .then((response: any) => {
        // localStorage.setItem('token', 'true');
        console.log(response.user);
      })
      .catch((err) => {
        alert(err.message);
      });

    // this.fireAuth.signInWithEmailAndPassword(email, password)
    //.then(
    //   () => {
    // localStorage.setItem('token', 'true');
    //     this.router.navigate(['/playlist']);
    //   },
    //   (err) => {
    //     alert(err.message);
    //     this.router.navigate(['/auth']);
    //   }
    // );
  }

  /// Register
  register(value: any) {
    createUserWithEmailAndPassword(this.auth, value.email, value.password)
      .then((response: any) => {
        // localStorage.setItem('token', 'true');
        console.log(response.user);
      })
      .catch((err) => {
        alert(err.message);
      });

    // this.fireAuth.createUserWithEmailAndPassword(email, password).then(
    //   () => {
    //     alert('Registration Successful');
    //     this.router.navigate(['/auth']);
    //   },
    //   (err) => {
    //     alert(err.message);
    //     this.router.navigate(['/auth']);
    //   }
    // );
  }

  /// logout
  logout() {
    // this.fireAuth.signOut().then(
    //   () => {
    //     localStorage.removeItem('token');
    //     this.router.navigate(['/auth']);
    //   },
    //   (err) => {
    //     alert(err.message);
    //   }
    // );
  }
}
