import { Component, OnInit } from '@angular/core';
import { IPlaylist } from '../../shared/app.model';
import { AppService } from '../../shared/app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './playlist.component.html',
})
export class PlaylistComponent implements OnInit {
  playlists: IPlaylist[] = [];

  constructor(private appService: AppService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.playlists = this.appService.getPlaylists();
  }
}
