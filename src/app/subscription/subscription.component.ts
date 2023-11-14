import { Component, OnInit } from '@angular/core';
import { IPlaylist } from '../shared/app.model';
import { AppService } from '../shared/app.service';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css'],
})
export class SubscriptionComponent implements OnInit {
  playlists: IPlaylist[] = [];
  public greeting: string = '';
  public isSidebarOpen = true;

  isAuthenticated: boolean = false;

  constructor(
    private appService: AppService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    // to check authentication state
    this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
    });
  }

  subscriptionPlans: any[] = [];
  selectedPlan: any;

  onPlanSelected(plan: any): void {
    this.selectedPlan = plan;
  }

  isModalOpen = false;

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
}
