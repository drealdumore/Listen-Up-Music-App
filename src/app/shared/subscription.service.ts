import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  private subscriptionPlans: any[] = [
    { id: 1, name: 'Plan 1', price: 29 },
    { id: 2, name: 'Plan 2', price: 39 },
    { id: 3, name: 'Plan 3', price: 59 },
  ];

  getSubscriptionPlans(): Observable<any[]> {
    return of(this.subscriptionPlans);
  }
}
