import { Component, Input, OnInit } from '@angular/core';
import { AudioService } from '../shared/audio-control.service';
import { ISongs } from '../shared/app.model';
import { AppService } from '../shared/app.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'player',

  templateUrl: './player.component.html',
})
export class PlayerComponent implements OnInit {
  public playerClicked: boolean = false;
  private songs: ISongs[] = [];
  private currentSindex: number = 0;
  public currentSong: ISongs | undefined;
  public isplayed: boolean = false;
  public movElement: number = 0;
  public playingMov: number = 0;

  constructor(
    private audioService: AudioService,
    private appService: AppService
  ) {}

  ngOnInit() {
    this.songs = this.appService.getSongs();
    this.loadCurrentSong();

    // this.audioService.playingSongCurrentTime.subscribe((playingSongCurrentTime) => {
    //   console.log({ id: '❣💛 playingSongCurrentTime 🧡', playingSongCurrentTime });
    // });

    this.audioService.playerSongProgress.subscribe((playerSongProgress) => {
      this.movElement = playerSongProgress;
    });

    this.audioService.playingSongProgress.subscribe((playingSongProgress) => {
      this.playingMov = playingSongProgress;
    });
  }

  public isplayerClicked() {
    this.playerClicked = true;
  }

  // If songplayed = display pause btn.
  // That means that pause will be hidden unless song is played
  public playAudio() {
    if (this.currentSong) {
      this.audioService.playSong(this.currentSong);
      this.isplayed = true;
    }
  }

  public pauseAudio() {
    if (this.currentSong) {
      this.audioService.pauseSong();
      this.isplayed = false;
    }
  }

  public nextSong() {
    this.currentSindex = (this.currentSindex + 1) % this.songs.length;
    this.loadCurrentSong();
    this.playAudio();
  }

  public previousSong() {
    this.currentSindex =
      (this.currentSindex - 1 + this.songs.length) % this.songs.length;
    this.loadCurrentSong();
    this.playAudio();
  }

  private loadCurrentSong() {
    this.currentSong = this.songs[this.currentSindex];
  }

  public hidePlaying() {
    this.playerClicked = false;
  }
}
