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
  login(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password)
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
  reg(email: string, password: string) {
    createUserWithEmailAndPassword(this.auth, email, password)
      .then((response: any) => {
        // localStorage.setItem('token', 'true');
        console.log(response.user);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  public register(username: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      return createUserWithEmailAndPassword(this.auth, username, password)
        .then((user) => resolve(user))
        .catch((err) => reject(err));
    });
  }
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
