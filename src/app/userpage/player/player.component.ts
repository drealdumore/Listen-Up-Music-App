import { Component, Input, OnInit } from '@angular/core';
import { AudioService } from '../../shared/audio-control.service';
import { ISongs } from '../../shared/app.model';
import { AppService } from '../../shared/app.service';
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
  // public progressEl: number = 0;
  public playingMov: number = 0;
  public current: number = 0;
  public duration: number = 0;

  constructor(
    private audioService: AudioService,
    private appService: AppService
  ) {}

  ngOnInit() {
    this.songs = this.appService.getSongs();
    this.loadCurrentSong();
    this.setCurrentSong()

    // to get song currents
    this.audioService.playingSongCurrentTime.subscribe(
      (playingSongCurrentTime) => {
        this.current = playingSongCurrentTime;
      }
    );

    // to get song duration
    this.audioService.getDuration.subscribe((playingSongDuration) => {
      this.duration = playingSongDuration;
    });

    // to get player movement progress
    this.audioService.playerSongProgress.subscribe((playerSongProgress) => {
      this.movElement = playerSongProgress;
    });

    // to get playing view movement progress
    this.audioService.playingSongProgress.subscribe((playingSongProgress) => {
      this.playingMov = playingSongProgress;
    });
  }

  public isplayerClicked() {
    this.playerClicked = true;
  }

  // If songplayed = display pause btn.
  // That means that pause svg will be hidden unless song is played
  public playAudio() {
    if (this.currentSong) {
      this.audioService.playSong();
      this.isplayed = true;
    }
  }

  /**
   * setCurrentSong
   */
  public setCurrentSong() {
    if (this.currentSong) {
      this.audioService.setCurrentSong(this.currentSong);
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
    this.pauseAudio();
    this.setCurrentSong()
    this.playAudio();
  }

  public previousSong() {
    this.currentSindex =
      (this.currentSindex - 1 + this.songs.length) % this.songs.length;
    this.loadCurrentSong();
    this.pauseAudio();
    this.setCurrentSong()
    this.playAudio();
  }

  private loadCurrentSong() {
    this.currentSong = this.songs[this.currentSindex];
  }

  public hidePlaying() {
    this.playerClicked = false;
  }

  // seekTo(value: number) {
  //   let pct = value / 100;
  //   this.audioService.seekTo((this.duration || 0) * pct);
  // }

  seekTo(value: number) {
    if (this.duration) {
      const pct = value / 100;
      const seekTime = this.duration * pct;
      this.audioService.seekTo(seekTime);
    } else {
      console.error('Audio duration not available. Unable to seek.');
    }
  }
}
