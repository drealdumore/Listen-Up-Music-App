import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/app.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IPlaylist, ISongs } from 'src/app/shared/app.model';

@Component({
  templateUrl: './playlist-detail.component.html',
})
export class PlaylistDetail implements OnInit {
  currentPlaylist: any;

  constructor(private route: ActivatedRoute, private appService: AppService) {}

  ngOnInit() {
    // this.route.params.forEach((params: Params) => {
    //   this.appService.getPlaylist(params['id']);
    // });

    // this.currentPlaylist = this.appService.getPlaylist(
    //   this.route.snapshot.params['id']
    // );

    this.route.params.subscribe((params: Params) => {
      const playlistId = params['id'];
      if (playlistId) {
        this.appService.getPlaylist(playlistId).subscribe((playlist) => {
          this.currentPlaylist = playlist;
        });
      }
    });
  }
}
