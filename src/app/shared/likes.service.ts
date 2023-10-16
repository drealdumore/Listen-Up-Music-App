import { Injectable } from '@angular/core';
import { ISongs } from './app.model';

@Injectable()
export class LikesService {
  likesArr: ISongs[] = [];

  // Add likes
  newLike(song: ISongs) {
    this.likesArr.push(song);
  }

  // Delete likes
  removeLike(id: any) {
    const i = this.likesArr.findIndex((song) => song.id === id);
    this.likesArr.splice(i, 1);
  }

  // songIsLiked(song: ISongs) {
  //   return this.likesArr.some((el) => el === song);
  // }

  // Boolean to check if song is liked or not
  songIsLiked(song: ISongs) {
    return this.likesArr.find((el) => el.id === song.id);
  }

  // Toogle between like and unlike
  toggleLikes(song: ISongs) {
    if (this.songIsLiked(song)) {
      this.removeLike(song.id);
    } else {
      this.newLike(song);
    }
  }

  // Get number of likes
  getNumLikes() {
    this.likesArr.length;
  }

  // Get likes Array
  getLikes(): ISongs[] {
    return this.likesArr;
  }
}
