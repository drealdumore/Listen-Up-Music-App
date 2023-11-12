import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

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
    <ng-container *ngIf="!is404Page(); else noPlayer">
      <player></player>
    </ng-container>
    <ng-template #noPlayer></ng-template>
  `,
})
export class AppComponent {
  loading: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
      }
    });
  }

  is404Page(): boolean {
    return this.router.url === '/404'; 
  }
}
