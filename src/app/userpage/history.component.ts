import { Component } from '@angular/core';
import { AppService } from '../shared/app.service';

@Component({
  templateUrl: './History.component.html',
})
export class HistoryComponent {
  title: string = 'History';
  constructor(private appService: AppService) {}
  
}
