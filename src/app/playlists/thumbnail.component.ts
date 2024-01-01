import { Component, Input } from '@angular/core';

@Component({
  selector: 'thumbnail',
  template: `
    <div [routerLink]="['/playlist', playlist.id]">
      <div class="feature">
        <img
          [src]="playlist?.images[0]?.url"
          [alt]="playlist?.name"
          class="feature__img"
        />
        <div class="feature__block">
          <h4 class="feature__heading">{{ playlist?.name }}</h4>
          <!-- <p class="feature__p">{{ playlist?.description}}</p> -->
        </div>
      </div>
    </div>
  `,
})
export class ThumbnailComponent {
  @Input() playlist: any;

//   tracks: Object { href: "https://api.spotify.com/v1/playlists/37i9dQZF1DWZCOSaet9tpB/tracks", total: 50 }
// ​​​
// href: "https://api.spotify.com/v1/playlists/37i9dQZF1DWZCOSaet9tpB/tracks"
}
