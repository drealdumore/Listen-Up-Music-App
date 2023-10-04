import { Component } from '@angular/core';
@Component({
  selector: 'navigation',
  template: `
    <header class="header" scroll>
      <img src="/assets/img/logo.png" alt="" class="logo" />

      <form class="search">
        <input type="text" class="search__input" placeholder="Search" />
        <button class="search__btn">&rarr;</button>
      </form>

      <!--- <nav class="user-nav">
      <div class="user">
      <img src="/assets/img/user-Mikel.jpg" alt="User" class="user__img" />
      </div>
      </nav> --->

      <div class="navbtns">
        <button class="nb signupbtn">Sign Up</button>
        <button class="nb loginbtn">Log In</button>
      </div>
    </header>
  `,
  styles: [
    `
      .navbtns {
        display: flex;
        gap: 1.2rem;
        margin-right: 2rem;
      }
      .nb {
        padding: 0.7rem 1.2rem;
        border-radius: 5px;
        color: #a49999;
        border: 1px solid #a49999;
      }
      .nb:hover {
        color: #f3f3f3;
        border: 1px solid #f3f3f3;

      }
      .signupbtn {
        background-color: #2e415a;
      }
      .loginbtn {
        background-color: transparent;
      }
    `,
  ],
})
export class NavComponent {}
