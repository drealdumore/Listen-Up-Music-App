import { Injectable } from '@angular/core';
import { ISongs } from './app.model';
import { Observable, Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  private currentAudio: HTMLAudioElement | null = null;
  public playingSongCurrentTime: Subject<number> = new Subject();

  public playerSongProgress = this.playingSongCurrentTime.pipe(
    map((currentTime) => {
      const currentAudio = this.currentAudio?.duration || 0;
      return (currentTime / currentAudio) * 98;
    })
  );

  public playingSongProgress = this.playingSongCurrentTime.pipe(
    map((currentTime) => {
      const currentAudio = this.currentAudio?.duration || 0;
      return (currentTime / currentAudio) * 86;
    })
  );

  public getDuration = this.playingSongCurrentTime.pipe(
    map(() => {
      const currentAudio = this.currentAudio?.duration || 0;
      return currentAudio;
    })
  );

  public current: number = 0;
  public duration: number = 0;
  public index: number = 0;
  public songs: ISongs[] = [];

  // startUpdatingSongCurrent
  // to get current Time
  public startUpdatingSongCurrent() {
    if (this.currentAudio) {
      this.currentAudio.ontimeupdate = (data) => {
        this.playingSongCurrentTime.next(this.currentAudio?.currentTime || 0);
      };
    }
  }

  // if there's no song playing, start new song
  // else continue playing the old one

  setCurrentSong(song: ISongs) {
    this.currentAudio = new Audio(song.path);
  }

  playSong() {
    if (!this.currentAudio) {
      return;
    }
    this.currentAudio.play();
    this.startUpdatingSongCurrent();
  }

  pauseSong() {
    if (this.currentAudio) {
      this.currentAudio.pause();
    }
  }

  nextSong() {
    if (this.index < this.songs.length - 1) {
      this.index++;
    } else {
      this.index = 0;
    }
    this.playSong();
  }

  prevSong() {
    if (this.index > 0) {
      this.index--;
    } else {
      this.index = this.songs.length - 1;
    }
    this.playSong();
  }

  public seekTo(percentage: number) {
    if (this.currentAudio) {
      const newTime = (percentage / 100) * (this.currentAudio.duration || 0);
      this.currentAudio.currentTime = newTime;
      this.playingSongCurrentTime.next(newTime);
    }
  }
}
