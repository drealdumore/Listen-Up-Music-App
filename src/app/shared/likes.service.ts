import { Injectable } from '@angular/core';
import { ISongs } from './app.model';

@Injectable()
export class LikesService {
  likesArr: ISongs[] = [];

  addLikes(song: ISongs) {
    const like: ISongs = {
      playlist_id: song.playlist_id,
      artist: song.artist,
      title: song.title,
      img: song.img,
      path: song.path,
      id: song.id,
    };
    this.likesArr.push(like);
    return like;
  }

  // New Add likes
  newLike(song: ISongs) {
    this.likesArr.push(song);
  }

  // New Delete likes
  removeLike(id: any) {
    this.likesArr.splice(id, 1);
  }

  songIsLiked(song: ISongs) {
    return this.likesArr.some((el) => el === song);
  }

  deleteLikes(id: any) {
    const index = this.likesArr.findIndex((el) => el.id === id);
    this.likesArr.splice(index, 1);
  }


  toggleLikes(song: ISongs) {
    if (this.songIsLiked(song)) {
      this.removeLike(song.id);
    } else {
      this.newLike(song);
    }
  }
  getNumLikes() {
    this.likesArr.length;
    console.log(this.likesArr.length);
  }



//   const renderLike = (currentSong) => {
//     const markup = `
//        <li rel="${currentSong.id}" class="likeli">
//         <a href="${currentSong.id}" class="playlist__link likes__link">
//           <figure class="playlist__fig">
//               <img src="${currentSong.img}" alt="${currentSong.title}">
//           </figure>
//           <div class="playlist__data">
//               <h4 class="playlist__name">${currentSong.title}</h4>
//               <p class="playlist__artist">${currentSong.artist}</p>
//           </div>
//         </a>
//         <svg class="view-icon" id="unlikeView">
//             <use xlink:href="img/sprite.svgicon-heart1"></use>
//         </svg>
//       </li>
//     `;
//     likesList.insertAdjacentHTML("beforeend", markup);
//   };
  
}
