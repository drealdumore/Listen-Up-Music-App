import { Component, OnInit } from '@angular/core';
import { AudioService } from '../shared/audio-control.service';
import { ISongs } from '../shared/app.model';
import { AppService } from '../shared/app.service';

@Component({
  selector: 'player',
  template: `
    <div class="player">
      <div class="player-main" (click)="isplayerClicked()">
        <figure class="player__fig">
          <img [src]="currentSong?.img" class="player__img" id="playerImg" />
        </figure>

        <div class="player__data">
          <h4 class="search__name" id="playerName">{{ currentSong?.title }}</h4>
          <p class="search__artist" id="playerArtist">
            {{ currentSong?.artist }}
          </p>
          <span class="player__mov"></span>
        </div>
      </div>
      <ul class="player__icons">
        <li>
          <svg class="player__icon heart-icon2">
            <use xlink:href="/assets/img/sprite.svg#icon-heart"></use>
          </svg>
        </li>
        <li (click)="previousSong()">
          <svg class="player__icon">
            <use xlink:href="/assets/img/sprite.svg#icon-previous"></use>
          </svg>
        </li>
        <li (click)="playAudio()">
          <svg class="player__icon" id="play">
            <use xlink:href="/assets/img/sprite.svg#icon-play2"></use>
          </svg>

          <svg class="player__icon hidden" id="pause">
            <use xlink:href="/assets/img/sprite.svg#icon-pause"></use>
          </svg>
        </li>
        <li (click)="nextSong()">
          <svg class="player__icon">
            <use xlink:href="/assets/img/sprite.svg#icon-next"></use>
          </svg>
        </li>
        <!-- <li>
          <svg class="player__icon">
            <use xlink:href="assets/img/sprite.svg#icon-download"></use>
          </svg>
        </li> -->
      </ul>
    </div>

    <playing *ngIf="playerClicked"></playing>
  `,
})
export class PlayerComponent implements OnInit {
  playerClicked: boolean = false;
  songs: ISongs[] = [];
  currentSongIndex: number = 0;
  currentSong: ISongs | undefined;

  constructor(
    private audioService: AudioService,
    private appService: AppService
  ) {}

  ngOnInit() {
    this.songs = this.appService.getSongs();
    this.loadCurrentSong();
  }

  isplayerClicked() {
    this.playerClicked = true;
  }

  playAudio() {
    if (this.currentSong) {
      this.audioService.playSong(this.currentSong);
      console.log('Is Playing:', this.currentSong.title);
    }
  }

  nextSong() {
    this.currentSongIndex = (this.currentSongIndex + 1) % this.songs.length;
    this.loadCurrentSong();
    this.playAudio();
  }

  previousSong() {
    this.currentSongIndex =
      (this.currentSongIndex - 1 + this.songs.length) % this.songs.length;
    this.loadCurrentSong();
  }

  private loadCurrentSong() {
    this.currentSong = this.songs[this.currentSongIndex];
  }

}
