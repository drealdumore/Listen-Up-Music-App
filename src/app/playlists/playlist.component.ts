import { Component, OnInit } from '@angular/core';
import { IPlaylist } from '../shared/app.model';
import { AppService } from '../shared/app.service';

@Component({
  templateUrl: './playlist.component.html',
})
export class PlaylistComponent implements OnInit {
  playlists: IPlaylist[] = [];
  public greeting: string = '';
  public isSidebarOpen = true;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.playlists = this.appService.getPlaylists();
    this.greeting = this.getSalutation();
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

}
