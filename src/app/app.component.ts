import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <div *ngIf="loading" class="loading__container">
      <div class="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  loading: boolean = false;
}
