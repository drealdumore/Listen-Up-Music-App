import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AppService } from './shared/app.service';
import { AuthService } from './shared/auth.service';
import { IPlaylist } from './shared/app.model';

@Component({
  selector: 'app',
  template: `
    <navigation *ngIf="!is404Page(); else noElement"></navigation>

    <main class="flex">
      <div
        class="sidebar open"
        *ngIf="!is404Page(); else noElement"
        [class.open]="isSidebarOpen"
      >
        <div class="logo-details">
          <!-- <i class="bx bx-menu" id="btn" (click)="toggleSidebar()"></i> -->
          <i class="bx bx-menu" id="btn"></i>
        </div>
        <div class="small">
          <h2 class="small__p">
            Create your <br />
            first playlist
          </h2>
          <button
            [routerLinkActive]="'navactive'"
            [routerLink]="['/playlist/new']"
            class="small__btn"
          >
            Create playlist
          </button>
        </div>
        <ul class="nav-list">
          <li [routerLinkActive]="'navactive'" [routerLink]="['/playlist']">
            <a href="/playlist">
              <i class="bx bxs-playlist"></i>
              <span class="links_name">Playlist</span>
            </a>
            <span class="tooltip">Playlist</span>
          </li>
          <li [routerLink]="['/404']">
            <a>
              <i class="bx bx-paperclip"></i>
              <span class="links_name">Category</span>
            </a>
            <span class="tooltip">Not Available</span>
          </li>
          <li [routerLinkActive]="'navactive'" [routerLink]="['/liked-songs']">
            <a href="/liked-songs">
              <i class="bx bx-heart"></i>
              <span class="links_name">Likes</span>
            </a>
            <span class="tooltip">Liked Songs</span>
          </li>
          <li [routerLinkActive]="'navactive'" [routerLink]="['/history']">
            <a href="/history">
              <i class="bx bx-history"></i>
              <span class="links_name">History</span>
            </a>
            <span class="tooltip">History</span>
          </li>
          <li [routerLink]="['/404']">
            <a>
              <i class="bx bx-download"></i>
              <span class="links_name">Downloads</span>
            </a>
            <span class="tooltip">Not Available</span>
          </li>
          <li [routerLink]="['/404']">
            <a>
              <i class="bx bx-star"></i>
              <span class="links_name">Favourite</span>
            </a>
            <span class="tooltip">Not Available</span>
          </li>
          <li [routerLinkActive]="'navactive'" [routerLink]="['/subscription']">
            <a>
              <i class="bx bx-credit-card"></i>
              <span class="links_name">Subscription</span>
            </a>
            <span class="tooltip">Subsription</span>
          </li>
        </ul>
        <div class="legal">
          <p>© Copyright by Saint.</p>
        </div>
      </div>

      <div class="home_">
        <router-outlet></router-outlet>
        <ng-container *ngIf="!is404Page(); else noElement">
          <player></player>
        </ng-container>
        <ng-template #noElement></ng-template>
      </div>
    </main>

    <div *ngIf="loading" class="loading__container">
      <div class="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <!-- <router-outlet></router-outlet>
    <ng-container *ngIf="!is404Page(); else noPlayer">
      <player></player>
    </ng-container>
    <ng-template #noPlayer></ng-template> -->
  `,
})
export class AppComponent {
  loading: boolean = false;

  constructor(
    private router: Router,
    private appService: AppService,
    private authService: AuthService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
      }
    });
  }

  is404Page(): boolean {
    return this.router.url === '/404';
  }

  playlists: IPlaylist[] = [];
  public greeting: string = '';
  public isSidebarOpen = true;

  user: any;
  userImg: any;
  userEmail: any;
  userProfile: boolean = false;
  isAuthenticated: boolean = false;
  // constructor(
  //   private appService: AppService,
  //   private authService: AuthService
  // ) {}

  ngOnInit() {
    // to check authentication state
    this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
    });

    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser).displayName;
    }
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.menuBtnChange();
  }

  menuBtnChange() {
    const btnIcon = this.isSidebarOpen ? 'bx-menu-alt-right' : 'bx-menu';
    const btnElement = document.getElementById('btn');
    if (btnElement) {
      btnElement.classList.replace('bx-menu', btnIcon);
    }
  }
}
