import { Injectable } from '@angular/core';
import { ISongs } from './app.model';
import { Observable, Subject, map } from 'rxjs';

@Injectable()
export class AudioService {
  private currentAudio: HTMLAudioElement | null = null;
  public playingSongCurrentTime: Subject<number> = new Subject();
  public songEnded: Subject<void> = new Subject<void>();

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

        // Check if the song has ended
        if (this.currentAudio?.ended) {
          // Notify that the song has ended
          this.songEnded.next();
        }
      };
    }
  }

  // if there's no song playing, start new song
  // else continue playing the old one
  setCurrentSong(song: ISongs) {
    // this.currentAudio = new Audio(song.path);
    // Release the resources of the previous audio before creating a new one
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio = null;
    }

    this.currentAudio = new Audio(song.path);

    // Listen for the 'ended' event
    this.currentAudio.addEventListener('ended', () => {
      // Notify that the song has ended
      this.songEnded.next();
    });
  }

  // To go to play song
  playSong() {
    if (!this.currentAudio) {
      return;
    }
    this.currentAudio.play();
    this.startUpdatingSongCurrent();
  }

  // To pause song
  pauseSong() {
    if (this.currentAudio) {
      this.currentAudio.pause();
    }
  }

  // To go to next song
  nextSong() {
    if (this.index < this.songs.length - 1) {
      this.index++;
    } else {
      this.index = 0;
    }
    this.playSong();
  }

  // To go to prev song
  prevSong() {
    if (this.index > 0) {
      this.index--;
    } else {
      this.index = this.songs.length - 1;
    }
    this.playSong();
  }

  // To seek between song
  public seekTo(percentage: number) {
    if (this.currentAudio) {
      const newTime = (percentage / 100) * (this.currentAudio.duration || 0);
      this.currentAudio.currentTime = newTime;
      this.playingSongCurrentTime.next(newTime);
    }
  }
}
