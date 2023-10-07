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

  public current: number = 0;
  public duration: number = 0;
  public index: number = 0;
  public songs: ISongs[] = [];

  
  playSong(song: ISongs) {
    this.pauseSong();
    this.currentAudio = new Audio(song.path);
    this.currentAudio.play();
    this.startUpdatingSongCurrent();
  }

  pauseSong() {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio = null;
    }
  }

  nextSong() {
    if (this.index < this.songs.length - 1) {
      this.index++;
    } else {
      this.index = 0;
    }
    this.playSong(this.songs[this.index]);
  }

  prevSong() {
    if (this.index > 0) {
      this.index--;
    } else {
      this.index = this.songs.length - 1;
    }
    this.playSong(this.songs[this.index]);
  }

  getDuration() {
    if (this.currentAudio) {
      this.currentAudio.addEventListener('timeupdate', () => {
        if (this.currentAudio) {
          let currentTime = +this.formatTime(this.currentAudio.currentTime);
          this.current = currentTime;
          // console.log('current time:', currentTime);

          if (!isNaN(this.currentAudio.duration)) {
            let duration = +this.formatTime(this.currentAudio.duration);
            this.duration = duration;
            // console.log('duration time:', duration);
          }
        }
      });
    }
  }

  /**
   * startUpdatingSongCurrent
   */
  
  public startUpdatingSongCurrent() {
    if (this.currentAudio) {
      this.currentAudio.ontimeupdate = (data) => {
        this.playingSongCurrentTime.next(this.currentAudio?.currentTime || 0);
      };
    }
  }

  getMov(): number | undefined {
    if (this.currentAudio) {
      let mov2 =
        (this.currentAudio.currentTime / this.currentAudio.duration) * 98;
      console.log(mov2);
      return mov2;
    }
    return undefined;
  }

  formatTime(timeInSec: any) {
    let min = Math.floor(timeInSec / 60);
    let sec = Math.floor(timeInSec % 60);
    return `${min}:${sec <= 9 ? '0' : ''}${sec}`;
  }

  // this.audio.addEventListener("timeupdate", () => {
  //    currentTime = formatTime(this.audio.currentTime);
  // current.textContent = currentTime;

  //   if (!isNaN(this.audio.duration)) {
  //      dur = formatTime(this.audio.duration);
  //     duration.textContent = dur;
  //   }

  // function to format duration into s
  //   formatTime(timeInSec) {
  //    let min = Math.floor(timeInSec / 60);
  //    let sec = Math.floor(timeInSec % 60);
  //   return `${min}:${sec <= 9 ? "0" : ""}${sec}`;
  //   }
  //    mov = (this.audio.currentTime / this.audio.duration) * 87;
  //    mov2 = (this.audio.currentTime / this.audio.duration) * 98;
  //   progress.style.width = `${mov}%`;
  //   playerMov.style.width = `${mov2}%`;
  // });
}
