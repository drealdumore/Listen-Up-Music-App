import { Component, Input } from '@angular/core';

@Component({
  selector: 'thumbnail',
  template: `
    <div [routerLink]="['/playlist', playlist.id]">
      <div class="feature">
        <img
          [src]="playlist?.img"
          [alt]="playlist?.name"
          class="feature__img"
        />
        <div class="feature__block">
          <h4 class="feature__heading">{{ playlist?.name }}</h4>
          <p class="feature__p">{{ playlist?.abstract }}</p>
        </div>
      </div>
    </div>
  `,
})
export class ThumbnailComponent {
  @Input() playlist: any;
}
