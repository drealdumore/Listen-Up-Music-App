import { Component } from '@angular/core';

@Component({
  template: `
    <div class="container">
      <div>
        <div class="wrapper">
          <svg>
            <text x="50%" y="50%" dy=".35em" text-anchor="middle">404</text>
          </svg>
        </div>
        <!-- <h1>404 - Not Found</h1> -->
        <p>Sorry, we are still working on this page😞</p>
        <a routerLink="/playlist" class="btn-404">
          <span class="btn-text">Go Back to App</span>
        </a>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        background-color: #2e415a;
        height: 100vh;
        color: #fff;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      p {
        margin-bottom: 2rem;
      }
      .btn-text {
        z-index: 1000;
        position: relative;
      }
      .btn-404 {
        color: #f3f3f3;
        border: 1px solid #f3f3f3;
        padding: 0.9rem 2rem;
        text-decoration: none;
        position: relative;
        transition: all 0.4s;
        border-radius: 10px;
      }

      .btn-404::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 2px;
        background-color: #7575759c;
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.4s;
        border-radius: 10px;
      }

      .btn-404:hover::before {
        transform: scaleY(1);
        width: 100%;
        border-radius: 10px;
      }

      h1 {
        font-size: 4rem;
      }
    `,
  ],
})
export class Error404Component {}
