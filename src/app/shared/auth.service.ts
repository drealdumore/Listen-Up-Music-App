import { Injectable } from '@angular/core';
// import { GoogleAuthProvider } from '@angular/fire/auth';
// import { GoogleAuthProvider } from '@angular/fire/auth';
import { GoogleAuthProvider } from 'firebase/auth';


import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private afs: AngularFireAuth) {}

  signInWithGoogle() {
    return this.afs['signInWithPopup'](new GoogleAuthProvider());
  }

  register(user: { email: string; password: string }) {
    return this.afs['createUserWithEmailAndPassword'](
      user.email,
      user.password
    );
  }

  login(user: { email: string; password: string }) {
    return this.afs['signInWithEmailAndPassword'](user.email, user.password);
  }

  logOut() {
    return this.afs['signOut']();
  }


  // /// Login
  // login(email: string, password: string) {
  //   signInWithEmailAndPassword(this.auth, email, password)
  //     .then((response: any) => {
  //       // localStorage.setItem('token', 'true');
  //       console.log(response.user);
  //     })
  //     .catch((err) => {
  //       alert(err.message);
  //     });

  //   // this.fireAuth.signInWithEmailAndPassword(email, password)
  //   //.then(
  //   //   () => {
  //   // localStorage.setItem('token', 'true');
  //   //     this.router.navigate(['/playlist']);
  //   //   },
  //   //   (err) => {
  //   //     alert(err.message);
  //   //     this.router.navigate(['/auth']);
  //   //   }
  //   // );
  // }

  // /// Register
  // register(email: string, password: string) {
  //   createUserWithEmailAndPassword(this.auth, email, password)
  //     .then((response: any) => {
  //       // localStorage.setItem('token', 'true');
  //       console.log(response.user);
  //     })
  //     .catch((err) => {
  //       alert(err.message);
  //     });
  // }

  /// logout
  // logout() {
  //   this.fireAuth.signOut().then(
  //     () => {
  //       localStorage.removeItem('token');
  //       this.router.navigate(['/auth']);
  //     },
  //     (err) => {
  //       alert(err.message);
  //     }
  //   );
  // }
}
