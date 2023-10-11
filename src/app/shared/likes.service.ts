import { Injectable } from '@angular/core';
import { ISongs } from './app.model';

@Injectable()
export class LikesService {
  likesArr: ISongs[] = [];

  // New Add likes
  newLike(song: ISongs) {
    this.likesArr.push(song);
  }

  // New Delete likes
  removeLike(id: any) {
    this.likesArr.splice(id, 1);
  }

  // Boolean to check if song is liked or not
  songIsLiked(song: ISongs) {
    return this.likesArr.some((el) => el === song);
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
    console.log(this.likesArr.length);
  }

  // Get likes Array
  getLikes(): ISongs[] {
    return this.likesArr;
  }
}
