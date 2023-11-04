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

  // constructor(
  //   private storage: AngularFireStorage,
  //   private afs: AngularFireAuth
  // ) {
  //   this.isAuthenticated$ = this.afs.authState.pipe(map((user) => !!user));
  //   this.afs.authState.subscribe((user: firebase.default.User | null) => {
  //     if (user) {
  //       this.user = user as import('@firebase/auth/dist/auth-public').User;
  //     } else {
  //       this.user = null;
  //     }
  //   });
  // }

  constructor(private afs: AngularFireAuth) {
    this.isAuthenticated$ = this.afs.authState.pipe(map((user) => !!user));
    this.afs.authState.subscribe((user: firebase.default.User | null) => {
      if (user) {
        this.user = user as import('@firebase/auth/dist/auth-public').User;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        this.user = null;
        localStorage.removeItem('user');
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

  setDisplayName(displayName: string) {
    this.afs.authState.subscribe((user) => {
      if (user) {
        user
          .updateProfile({ displayName: displayName })
          // .then(() => {
          //   // Display name updated successfully
          //   // console.log('Display name Updated:', displayName);
          // })
          // .catch((err) => {
          //   // An error occured while updating display name
          //   console.error('Error updating display name:', err);
          // });
      }
    });
  }
}
