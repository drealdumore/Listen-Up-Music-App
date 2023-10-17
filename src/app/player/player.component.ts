import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { AudioService } from '../shared/audio-control.service';
import { ISongs } from '../shared/app.model';
import { AppService } from '../shared/app.service';
import { Subscription } from 'rxjs';
import { LikesService } from 'src/app/shared/likes.service';
import { Token } from '@angular/compiler';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
})
export class PlayerComponent implements OnInit {
  public playerClicked: boolean = false;
  private songs: ISongs[] = [];
  private currentSindex: number = 0;
  public currentSong!: ISongs;
  public isplayed: boolean = false;
  public movElement: number = 0;
  public playingMov: number = 0;
  public current: number = 0;
  public duration: number = 0;

  constructor(
    private audioService: AudioService,
    private appService: AppService,
    private likeService: LikesService
  ) {}

  ngOnInit() {
    this.songs = this.appService.getSongs();
    this.loadCurrentSong();
    this.setCurrentSong();

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

  // If songplayed = display pause btn.
  // That means that pause svg will be hidden unless song is played
  public playAudio() {
    if (this.currentSong) {
      this.audioService.playSong();
      this.isplayed = true;
    }
  }

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
    this.setCurrentSong();
    this.playAudio();
  }

  public previousSong() {
    this.currentSindex =
      (this.currentSindex - 1 + this.songs.length) % this.songs.length;
    this.loadCurrentSong();
    this.pauseAudio();
    this.setCurrentSong();
    this.playAudio();
  }

  private loadCurrentSong() {
    this.currentSong = this.songs[this.currentSindex];
  }

  seekTo(value: number) {
    const pct = value / 100;
    this.audioService.seekTo((this.duration || 0) * pct);
  }

  addLikes() {
    this.likeService.newLike(this.currentSong);
    this.songIsLiked();
  }

  deleteLikes() {
    this.likeService.removeLike(this.currentSong.id);
    this.songIsLiked();
  }

  toggleLikes() {
    if (!this.songIsLiked()) {
      this.addLikes();
    } else {
      this.deleteLikes();
    }
  }

  songIsLiked() {
    return this.likeService.songIsLiked(this.currentSong);
  }
}

// the reason why it is playing differently on different pages is because, in every page, theres a new instance of the player component.
// Possible fixes
//- subscribe to an observable so that whenever ot routes to a new page, it will read the observable of the previouse page and continue.
//- make the player component to be side by side with the router link : cons = if it works, it will be  displayed in the 404 page as well.
//- 