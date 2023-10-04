import { Component } from '@angular/core';
import { AppService } from '../../shared/app.service';
import { ActivatedRoute } from '@angular/router';
import { ISongs } from 'src/app/shared/app.model';

@Component({
  templateUrl: './playlist-detail.component.html',
})
export class PlaylistDetail {
  currentPlaylist: any;
  songs: ISongs[] = [];

  constructor(private appService: AppService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.currentPlaylist = this.appService.getPlaylist(this.route.snapshot.params['id'])
  }

  click() {
    // this.appService.getSongs()

  }


}
