import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AudioService } from '../shared/audio-control.service';
import { ISongs } from '../shared/app.model';
import { AppService } from '../shared/app.service';
import { Subscription } from 'rxjs';

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
          <span [style.width.%]="movElement" class="player__mov"></span>
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
        <li>
          <svg *ngIf="!isplayed" (click)="playAudio()" class="player__icon">
            <use xlink:href="/assets/img/sprite.svg#icon-play2"></use>
          </svg>

          <svg *ngIf="isplayed" (click)="pauseAudio()" class="player__icon">
            <use xlink:href="/assets/img/sprite.svg#icon-pause"></use>
          </svg>
        </li>
        <li (click)="nextSong()">
          <svg class="player__icon">
            <use xlink:href="/assets/img/sprite.svg#icon-next"></use>
          </svg>
        </li>
      </ul>
    </div>

    <playing *ngIf="playerClicked"></playing>
  `,
})
export class PlayerComponent implements OnInit {
  playerClicked: boolean = false;
  songs: ISongs[] = [];
  currentSindex: number = 0;
  currentSong: ISongs | undefined;
  isplayed: boolean = false;
  movElement: any;
  dur: any;
  // @Input() playingSong() {
  //   this.currentSong
  // }

  constructor(
    private audioService: AudioService,
    private appService: AppService
  ) {}

  ngOnInit() {
    this.songs = this.appService.getSongs();
    this.dur = this.audioService.getDuration();
    console.log(this.dur);

    this.loadCurrentSong();
    this.movElement = this.audioService.getMov();
    console.log(this.movElement);
  }

  isplayerClicked() {
    this.playerClicked = true;
  }

  playAudio() {
    if (this.currentSong) {
      this.audioService.playSong(this.currentSong);
      this.isplayed = true;
      this.audioService.getDuration();
    }
    // if songplayed = display pause btn.
    // that means that pause will be hidden unless song is played
  }

  pauseAudio() {
    if (this.currentSong) {
      this.audioService.pauseSong(this.currentSong);
      this.isplayed = false;
    }
  }

  nextSong() {
    this.currentSindex = (this.currentSindex + 1) % this.songs.length;
    this.loadCurrentSong();
    this.playAudio();
  }

  previousSong() {
    this.currentSindex =
      (this.currentSindex - 1 + this.songs.length) % this.songs.length;
    this.loadCurrentSong();
    this.playAudio();
  }

  private loadCurrentSong() {
    this.currentSong = this.songs[this.currentSindex];
  }
}
