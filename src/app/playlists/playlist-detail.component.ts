import { Component, OnInit, inject } from '@angular/core';
import { AppService } from '../shared/app.service';
import { ActivatedRoute, Params } from '@angular/router';
import { mergeMap } from 'rxjs';
import { SpotifyService } from '../shared/spotifyservice.service';
import { switchMap } from 'rxjs/operators';

@Component({
  templateUrl: './playlist-detail.component.html',
})
export class PlaylistDetail implements OnInit {
  currentPlaylist: any;

  private spotifyService = inject(SpotifyService);
  allPlaylists: any;
  playlistSongs: any;

  constructor(private route: ActivatedRoute, private appService: AppService) {}

  ngOnInit() {
    this.displayPlaylistItems();
  }

  displayPlaylistItems() {
    this.route.params
      .pipe(
        //get the id from routes first
        switchMap((params: Params) => {
          const playlistId = params['id'];

          if (playlistId) {
            // if id, get token
            return this.spotifyService.getToken().pipe(
              switchMap((tokenResponse) => {
                const token = tokenResponse.access_token;
                // use the token and playlstId to get playlist
                return this.spotifyService.getPlaylist(playlistId, token).pipe(
                  switchMap((currentPlaylist) => {
                    // use the token and playlstId to get playlist songs
                    this.currentPlaylist = currentPlaylist;
                    return this.spotifyService.getPlaylistsItems(
                      playlistId,
                      token
                    );
                  })
                );
              })
            );
          }
          throw new Error('Playlist ID not found in route parameters.');
        })
      )
      .subscribe(
        (playlist) => {
          this.playlistSongs = playlist.items;
          console.log('🚀 playlistSongs:', this.playlistSongs);
        },
        (error) => {
          console.error('Error:', error);
        }
      );
  }
}
