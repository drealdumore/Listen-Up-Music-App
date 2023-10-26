import { Component } from '@angular/core';
import { AppService } from '../shared/app.service';

@Component({
  templateUrl: './history.component.html',
})
export class HistoryComponent {
  title: string = 'History';
  

  public isSidebarOpen = true;

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
