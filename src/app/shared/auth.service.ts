import { Injectable } from '@angular/core';
import { GoogleAuthProvider, User } from 'firebase/auth';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/compat/storage';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated$: Observable<boolean>;
  private user: User | null = null;

  constructor(
    private storage: AngularFireStorage,
    private afs: AngularFireAuth
  ) {
    this.isAuthenticated$ = this.afs.authState.pipe(map((user) => !!user));
    this.afs.authState.subscribe((user: firebase.default.User | null) => {
      if (user) {
        this.user = user as import('@firebase/auth/dist/auth-public').User;
      } else {
        this.user = null;
      }
    });
  }

  signInWithGoogle() {
    return this.afs.signInWithPopup(new GoogleAuthProvider());
  }

  register(user: { email: string; password: string }) {
    return this.afs.createUserWithEmailAndPassword(user.email, user.password);
  }

  login(user: { email: string; password: string }) {
    return this.afs.signInWithEmailAndPassword(user.email, user.password);
  }

  logOut() {
    return this.afs.signOut();
  }

  getUser(): User | null {
    return this.user;
  }
}


// import { Injectable } from '@angular/core';
// import { GoogleAuthProvider } from 'firebase/auth';
// import { Router } from '@angular/router';
// import { AngularFireAuth } from '@angular/fire/compat/auth';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   isAuthenticated: boolean = false;

//   constructor(private router: Router, private afs: AngularFireAuth) {}

//   signInWithGoogle() {
//     return this.afs['signInWithPopup'](new GoogleAuthProvider());
//   }

//   register(user: { email: string; password: string }) {
//     return this.afs['createUserWithEmailAndPassword'](
//       user.email,
//       user.password
//     );
//   }

//   login(user: { email: string; password: string }) {
//     return this.afs['signInWithEmailAndPassword'](user.email, user.password);
//   }

//   logOut() {
//     return this.afs['signOut']();
//   }
// 
