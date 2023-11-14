import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  isSidebarOpen = false;

  constructor(private router: Router, private authService: AuthService) {
    this.checkWidth();
  }

  is404Page(): boolean {
    const currentUrl = this.router.url;
    return (
      currentUrl === '/404' ||
      currentUrl === '/auth/login' ||
      currentUrl === '/auth/signup'
    );
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  navigateAndHideSidebar(route: string) {
    this.isSidebarOpen = false;
    this.router.navigate([route]);
  }

  shouldDisplayNavAndHome(): boolean {
    return window.innerWidth > 745;
  }

  shouldHideNav(): boolean {
    return (
      typeof window !== 'undefined' &&
      window.innerWidth >= 481 &&
      window.innerWidth >= 744
    );
  }

  // to display homepage first b4 showing the side nav
  shouldDisplayHome(): boolean {
    return window.innerWidth >= 320 && window.innerWidth <= 480;
  }

  getSidebarDisplay(): string {
    if (this.isSidebarOpen && this.shouldDisplayHome()) {
      return 'none';
    } else if (this.shouldDisplayNavAndHome()) {
      return 'none';
    } else if (this.shouldHideNav()) {
      return 'none';
    } else {
      return 'block';
    }
  }

  getHomeDisplay(): string {
    if (this.isSidebarOpen) {
      return 'none';
    } else if (this.shouldDisplayHome()) {
      return 'block';
    } else if (this.shouldDisplayNavAndHome()) {
      return 'none';
    } else if (this.shouldHideNav()) {
      return 'block';
    } else {
      return 'none';
    }
  }

  shouldDisplayBoth(): boolean {
    return window.innerWidth > 745;
  }

  both: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkWidth();
  }

  private checkWidth(): void {
    this.both = window.innerWidth >= 745;
  }
}
// [ngStyle]="{ display: shouldDisplayBoth() ? 'block' : '' }"
