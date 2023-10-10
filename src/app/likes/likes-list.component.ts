import { Component, Input } from '@angular/core';
import { ISongs } from 'src/app/shared/app.model';
import { AppService } from 'src/app/shared/app.service';

@Component({
  selector: 'likes-list',
  template: `
    <li *ngFor="let song of songs">
      <a class="playlist__link">
        <figure class="playlist__fig">
          <img [src]="song?.img" [alt]="song?.title" />
        </figure>
        <div class="playlist__data">
          <h4 class="playlist__name">{{ song.title }}</h4>
          <p class="playlist__artist">{{ song.artist }}</p>
        </div>
      </a>
    </li>
  `,
})
export class LikesList {
  @Input() songs: ISongs[] = [];
}
