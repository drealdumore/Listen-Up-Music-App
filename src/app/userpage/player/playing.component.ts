// import { Component, Output } from '@angular/core';

// @Component({
//   selector: 'playing',
//   template: `
//     <div class="play-active" *ngIf="!playingClicked">
//       <div class="playing">
//         <div class="playing__header">
//           <span class="playing_close" (click)="playingIsClicked()">
//             <svg class="menu-icon">
//               <use xlink:href="/assets/img/sprite.svg#icon-circle-left"></use>
//             </svg>
//           </span>
//           <figure>
//             <h4 class="search__name">Playing from Playlist</h4>
//             <p class="search__artist" id="fro">All songs</p>
//           </figure>
//           <span class="menu">
//             <svg class="menu-icon" id="queueBtn">
//               <use
//                 xlink:href="/assets/img/sprite.svg#icon-music-playlist"
//               ></use>
//             </svg>
//           </span>
//         </div>

//         <div class="playing-view">
//           <img
//             src="/assets/img/user-Saint.jpg"
//             alt="song-img"
//             class="playing-img"
//             id="playingImg"
//           />
//         </div>
//         <div class="playing__body">
//           <div class="player__data">
//             <h4 class="playing__name">My All</h4>
//             <p class="playing__artist">Saint</p>
//           </div>
//           <svg class="heart-icon">
//             <use xlink:href="/assets/img/sprite.svg#icon-heart"></use>
//           </svg>
//         </div>

//         <div class="movement">
//           <div class="movement__progress"></div>
//           <div class="time">
//             <span id="current">0:00</span>
//             <span id="duration">0:00</span>
//           </div>
//         </div>
//         <ul class="playing__icons">
//           <li>
//             <svg class="playing__icon--small">
//               <use xlink:href="/assets/img/sprite.svg#icon-shuffle"></use>
//             </svg>
//           </li>
//           <li>
//             <svg class="playing__icon" id="back">
//               <use xlink:href="/assets/img/sprite.svg#icon-previous"></use>
//             </svg>
//           </li>
//           <li>
//             <svg class="playing__icon" id="play2">
//               <use xlink:href="/assets/img/sprite.svg#icon-play2"></use>
//             </svg>
//             <svg class="playing__icon hidden" id="pause2">
//               <use xlink:href="/assets/img/sprite.svg#icon-pause"></use>
//             </svg>
//           </li>
//           <li>
//             <svg class="playing__icon" id="next">
//               <use xlink:href="/assets/img/sprite.svg#icon-next"></use>
//             </svg>
//           </li>
//           <li>
//             <svg class="playing__icon--small">
//               <use xlink:href="/assets/img/sprite.svg#icon-loop"></use>
//             </svg>
//           </li>
//         </ul>
//       </div>

//       <div class="playing-overlay"></div>
//     </div>
//   `,
// })
// export class PlayingComponent {
//   playingClicked: boolean = false;

//   @Output() playingIsClicked() {
//     this.playingClicked = true;
//   }
// }
