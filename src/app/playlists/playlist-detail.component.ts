import { forkJoin } from 'rxjs';
import { Component, OnInit, inject } from '@angular/core';
import { AppService } from '../shared/app.service';
import { ActivatedRoute, Params } from '@angular/router';
import { mergeMap } from 'rxjs';
import { SpotifyService } from '../shared/spotifyservice.service';
import { switchMap, tap } from 'rxjs/operators';
import { LoaderService } from '../shared/loader.service';

@Component({
  templateUrl: './playlist-detail.component.html',
})
export class PlaylistDetail implements OnInit {
  currentPlaylist: any;

  private spotifyService = inject(SpotifyService);
  allPlaylists: any;
  playlistSongs: any;

  constructor(
    private route: ActivatedRoute,
    private loaderService: LoaderService
  ) {}

//   ngOnInit() {
//     this.loaderService.showLoader();
//     this.displayPlaylistItems();
//   }

//   displayPlaylistItems() {
//     this.route.params
//       .pipe(
//         //get the id from routes first
//         switchMap((params: Params) => {
//           const playlistId = params['id'];

//           if (playlistId) {
//             // if id, get token
//             return this.spotifyService.getToken().pipe(
//               tap((data) => {
//                 this.loaderService.hideLoader();
//               }),
//               switchMap((tokenResponse) => {
//                 const token = tokenResponse.access_token;
//                 // use the token and playlstId to get playlist
//                 return this.spotifyService.getPlaylist(playlistId, token).pipe(
//                   switchMap((currentPlaylist) => {
//                     // use the token and playlstId to get playlist songs
//                     this.currentPlaylist = currentPlaylist;
//                     return this.spotifyService.getPlaylistsItems(
//                       playlistId,
//                       token
//                     );
//                   })
//                 );
//               })
//             );
//           }
//           throw new Error('Playlist ID not found in route parameters.');
//         })
//       )
//       .subscribe(
//         (playlist) => {
//           this.playlistSongs = playlist.items;
//           console.log('🚀 playlistSongs:', this.currentPlaylist);
//         },
//         (error) => {
//           console.error('Error:', error);
//         }
//       );
//   }


ngOnInit() {
  this.loaderService.showLoader();
  this.displayPlaylistItems();
}

displayPlaylistItems() {
  this.route.params
    .pipe(
      switchMap((params: Params) => {
        const playlistId = params['id'];

        if (playlistId) {
          // if id, get token and playlist in parallel
          return forkJoin([
            this.spotifyService.getToken(),
            this.spotifyService.getPlaylist(playlistId, token)
          ]).pipe(
            tap(() => {
              this.loaderService.hideLoader();
            }),
            switchMap(([tokenResponse, currentPlaylist]) => {
              const token = tokenResponse.access_token;
              // use the token and playlstId to get playlist songs
              this.currentPlaylist = currentPlaylist;
              return this.spotifyService.getPlaylistsItems(
                playlistId,
                token
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
        console.log('🚀 playlistSongs:', this.currentPlaylist);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
}

}
