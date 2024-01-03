import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SpotifyService } from '../shared/spotifyservice.service';
import { switchMap, tap } from 'rxjs/operators';
import { LoaderService } from '../shared/loader.service';

@Component({
  templateUrl: './playlist-detail.component.html',
})
export class PlaylistDetail implements OnInit {
  currentPlaylist: any;
  allPlaylists: any;
  playlistSongs: any;

  private spotifyService = inject(SpotifyService);
  private route = inject(ActivatedRoute);
  private loaderService = inject(LoaderService);



  ngOnInit() {
    this.loaderService.showLoader();
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
                  //hide loader if data
                  tap((data) => {
                    this.loaderService.hideLoader();
                  }),
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
        },
        (error) => {
          console.error('Error:', error);
        }
      );
  }

}
