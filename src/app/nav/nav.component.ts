import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'navigation',
  template: `
    <header class="header" scroll>
      <img src="/assets/img/logo.png" alt="" class="logo" />

      <form class="search">
        <input type="text" class="search__input" placeholder="Search" />
        <button class="search__btn">&rarr;</button>
      </form>

      <!-- if it authenticated.
      - i want the salute message to be bolder and it should have the username: Good afternoon, saint.
      - i want to remove the signin and signup button and add the user nav
      - in the user profile, i want to have a circle that can make user add images from their device.
      - it should also have a form with prefilled user name and password, where user can change details and when saved,
        the details will be added automatically.
      -->

      <nav *ngIf="isAuthenticated" class="user-nav">
        <div class="user" (mouseenter)="visible()" (mouseleave)="notvisible()">
          <img src="/assets/img/user-Mikel.jpg" alt="User" class="user__img" />
          <!-- *ngIf="isVisible" -->
          <div *ngIf="isVisible" class="display">
            <h4 class="display__salute">Yo! Wazzup!</h4>
            <ul class="display__links">
              <li class="display__link">
                <img src="/assets/img/profile.svg" class="display__icon" />
                <span>profile</span>
              </li>
              <li class="display__link">
                <img src="/assets/img/setting.svg" class="display__icon" />
                <span>settings</span>
              </li>
              <li class="display__link">
                <img src="/assets/img/support.svg" class="display__icon" />
                <span>support</span>
              </li>
            </ul>
            <hr />
            <button class="display__close">Log Out</button>
          </div>
        </div>
      </nav>

      <div class="navbtns">
        <button class="nb signupbtn" (click)="goToSignUp()">Sign Up</button>
        <button class="nb loginbtn" (click)="goToSignIn()">Log In</button>
      </div>
    </header>
  `,
})
export class NavComponent {
  isAuthenticated: boolean = false;
  isVisible: boolean = false;
  constructor(private router: Router) {}

  goToSignUp() {
    this.router.navigate(['/auth/signup']);
  }

  goToSignIn() {
    this.router.navigate(['/auth/login']);
  }

  // if mouseover on img, add visible class to display
  // if mouse out, add notvisible

  visible() {
    setTimeout(() => {
      this.isVisible = true;
    }, 200);
  }

  notvisible() {
    setTimeout(() => {
      this.isVisible = false;
    }, 200);
  }
}

class Likes {
  //         constructor() {
  //           this.likes = [];
  //         }
  //         addLike(id, title, artist, img) {
  //           const like = { id, title, artist, img };
  //           this.likes.push(like);
  //           return like;
  //         }
  //         deleteLike(id) {
  //           const index = this.likes.findIndex((el) => el.id === id);
  //           this.likes.splice(index, 1);
  //         }
  //         //  to check array if song is liked or not
  //         isLiked(id) {
  //           return this.likes.find((el) => el.id === id);
  //         }
  //         // // to get number of likes
  //         // getNumLikes() {
  //         //   return this.likes.length;
  //         // }
  //       }
  //       // LIKE CONTROLLER
  //       const myLikes = new Likes();
  //       const toggleLikeBtn = (songId) => {
  //         const iconString = myLikes.isLiked(songId) ? "icon-heart1" : "icon-heart";
  //         document
  //           .querySelector(".heart-icon use")
  //           .setAttribute("href", `img/sprite.svg#${iconString}`);
  //         document
  //           .querySelector(".heart-icon2 use")
  //           .setAttribute("href", `img/sprite.svg#${iconString}`);
  //       };
  // const controlLike = () => {
  //     const currentID = currentSong.id;
  //     // console.log({id: '❤✔', currentID});
  //     // user has not yet liked current song
  //     if (!myLikes.isLiked(currentID)) {
  //       // add like to array
  //       const newLike = myLikes.addLike(
  //         currentID,
  //         currentSong.title,
  //         currentSong.artist,
  //         currentSong.img
  //       );
  //       // toggle like button
  //       toggleLikeBtn(currentID);
  //       // add like to ui
  //       renderLike(newLike);
  //       // user has liked current song
  //     } else {
  //       // remove like from array
  //       myLikes.deleteLike(currentID);
  //       // toggle like button
  //       toggleLikeBtn(currentID);
  //       // remove like from ui
  //       deleteLike(currentID);
  //     }
  //   };
  //   window.addEventListener("click", (e) => {
  //     if (
  //       e.target.matches(".heart-icon, .heart-icon *, .heart-icon2, .heart-icon2 *")
  //     ) {
  //       controlLike();
  //     }
  //   });
  //   const deleteLike = (id) => {
  //     const el = document.querySelector(
  //       `.likes__link[href*="${id}"]`
  //     ).parentElement;
  //     if (el) el.parentElement.removeChild(el);
  //   };
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
  //   likesList.addEventListener("click", (e) => {
  //     if (e.target.matches(".likeli")) {
  //       e.preventDefault();
  //       const songId = e.target.getAttribute("rel");
  //       active(songId);
  //     }
  //   });
}
