import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  isSidebarOpen = false;

  constructor(private router: Router, private authService: AuthService) {}

  is404Page(): boolean {
    const currentUrl = this.router.url;
    return (
      currentUrl === '/404' ||
      currentUrl === '/auth/login' ||
      currentUrl === '/auth/signup'
    );
  }

  isAuthenticated: boolean = false;

  ngOnInit() {
    // to check authentication state
    this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
    });
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  navigateAndHideSidebar(route: string) {
    this.isSidebarOpen = false;
    this.router.navigate([route]);
  }

  shouldDisplayBlock(): boolean {
    return window.innerWidth > 745;
  }

  shouldHideNav(): boolean {
    return (
      typeof window !== 'undefined' &&
      window.innerWidth >= 481 &&
      window.innerWidth <= 744
    );
  }

  shouldDisplayHome(): boolean {
    return typeof window !== 'undefined' && window.innerWidth >= 320 && window.innerWidth <= 480;
  }
  
}
