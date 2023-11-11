import { Component, OnInit } from '@angular/core';
import { IPlaylist } from '../shared/app.model';
import { AppService } from '../shared/app.service';
import { AuthService } from '../shared/auth.service';
import { SubscriptionService } from '../shared/subscription.service';

@Component({
  selector: 'subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css'],
})
export class SubscriptionComponent implements OnInit {
  playlists: IPlaylist[] = [];
  public greeting: string = '';
  public isSidebarOpen = true;

  user: any;
  userImg: any;
  userEmail: any;
  userProfile: boolean = false;
  isAuthenticated: boolean = false;
  
  constructor(
    private appService: AppService,
    private authService: AuthService,
    private subscriptionService: SubscriptionService
  ) {}

  ngOnInit() {
    this.playlists = this.appService.getPlaylists();
    this.greeting = this.getSalutation();

    // to check authentication state
    this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
    });

    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser).displayName;
    }

    this.subscriptionService.getSubscriptionPlans().subscribe((plans) => {
      this.subscriptionPlans = plans;
    });
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

  salute() {
    const now = new Date();
    const hours = now.getHours();
    let salutation;
    if (hours >= 5 && hours < 12) {
      // salutation = `Good Morning, ${activeUser.user}`;
      salutation = `Good Morning`;
    } else if (hours > 12 && hours < 18) {
      // salutation = `Good afternoon, ${activeUser.user}`;
      salutation = `Good afternoon`;
    } else {
      // salutation = `Good evening, ${activeUser.user}`;
      salutation = `Good evening`;
    }
    return salutation;
  }

  getSalutation() {
    return this.salute();
  }

  subscriptionPlans: any[] = [];
  selectedPlan: any;

  onPlanSelected(plan: any): void {
    this.selectedPlan = plan;
  }
}
