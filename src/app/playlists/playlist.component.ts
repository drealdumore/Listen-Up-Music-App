import { Component, OnInit } from '@angular/core';
import { IPlaylist } from '../shared/app.model';
import { AppService } from '../shared/app.service';

@Component({
  templateUrl: './playlist.component.html',
})
export class PlaylistComponent implements OnInit {
  playlists: IPlaylist[] = [];
  greeting: string = ''

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.playlists = this.appService.getPlaylists();
    this.greeting = this.getSalutation();

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
