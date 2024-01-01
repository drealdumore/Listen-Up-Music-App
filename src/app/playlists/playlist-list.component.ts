import { Component, Input, OnInit } from '@angular/core';
import { ISongs } from 'src/app/shared/app.model';
import { AppService } from '../shared/app.service';
import { AudioService } from '../shared/audio-control.service';
import { LikesService } from '../shared/likes.service';

@Component({
  selector: 'song-list',
  templateUrl: './playlist-list.component.html',
})
export class PlaylistList implements OnInit {
  @Input() displaySongs: any[] = [];

  public currentSong!: ISongs;
  public isplayed: boolean = false;
  public songs: ISongs[] = [];
  public playerClicked: boolean = false;
  private currentSindex: number = 0;
  public movElement: number = 0;
  public playingMov: number = 0;
  public current: number = 0;
  public duration: number = 0;

  constructor(
    private audioService: AudioService,
    private appService: AppService,
    private likeService: LikesService
  ) {}

  public setCurrentSong() {
    if (this.currentSong) {
      this.audioService.setCurrentSong(this.currentSong);
    }
  }

  private loadCurrentSong() {
    this.currentSong = this.songs[this.currentSindex];
  }

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

  playSongFromUrl(url: string) {
    this.pauseAudio();

    this.audioService.setCurrentSong({ path: url } as ISongs);

    this.playAudio();
  }

  toggleLikesForSong(song: ISongs) {
    this.likeService.toggleLikes(song);
  }

}
