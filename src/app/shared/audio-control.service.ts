import { Injectable } from '@angular/core';
import { ISongs } from './app.model';

@Injectable()
export class AudioService {
  audio = new Audio();
  private currentAudio: HTMLAudioElement | null = null;
  current: string = '';
  duration: string = '';

  playSong(song: ISongs) {
    // pause the currently Song
    this.pauseSong();

    // create new audio element for selected song
    this.currentAudio = new Audio(song.path);
    this.currentAudio.play();
  }

  pauseSong() {
    // pause the currently Song
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio = null;
    }
  }

  // nextSong() {
  //   this.currentSongIndex = (this.currentSongIndex + 1) % this.songs.length;
  //   this.loadCurrentSong();
  //   this.playAudio();
  // }

  // previousSong() {
  //   this.currentSongIndex =
  //     (this.currentSongIndex - 1 + this.songs.length) % this.songs.length;
  //   this.loadCurrentSong();
  // }

  // DURATION
  getDuration() {
    this.audio.addEventListener('timeupdate', () => {
      let currentTime = this.formatTime(this.audio.currentTime);
      this.current = currentTime;

      if (!isNaN(this.audio.duration)) {
        let duration = this.formatTime(this.audio.duration);
        this.duration = duration;
        let mov2 = (this.audio.currentTime / this.audio.duration) * 98;
        let mov = (this.audio.currentTime / this.audio.duration) * 87;

        let progress = document.querySelector('.player__mov') as HTMLElement;
        if (progress) progress.style.width = `${mov}%`;
      }
    });
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
