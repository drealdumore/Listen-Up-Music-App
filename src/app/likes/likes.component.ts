import { Component } from '@angular/core';
import { AppService } from '../shared/app.service';
import { ActivatedRoute } from '@angular/router';
import { LikesService } from '../shared/likes.service';
import { ISongs } from '../shared/app.model';

@Component({
  templateUrl: './likes.component.html',
})
export class LikesComponent {
  title: string = 'Liked Songs';
  currentPlaylist: any;
  likedSongs: ISongs[] = [];

  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
    private likeService: LikesService
  ) {}

  ngOnInit() {
    this.currentPlaylist = this.appService.getPlaylist(
      this.route.snapshot.params['id']
    );
    // this.likedSongs = this.likeService.getLikes()
    this.likedSongs = this.likeService.getLikes()
  }
}
