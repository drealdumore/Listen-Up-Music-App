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

      <nav *ngIf="isAuthenticated" class="user-nav">
        <div class="user">
          <img src="/assets/img/user-Mikel.jpg" alt="User" class="user__img" />
        </div>
      </nav>

      <div class="navbtns">
        <button class="nb signupbtn" (click)="goToSignUp()">Sign Up</button>
        <button class="nb loginbtn" (click)="goToSignIn()">Log In</button>
      </div>
    </header>
  `,
  styles: [
    `
      .navbtns {
        display: flex;
        gap: 1.2rem;
        margin-right: 2rem;
      }
      .nb {
        padding: 0.7rem 1.2rem;
        border-radius: 5px;
        color: #a49999;
        border: 1px solid #a49999;
      }
      .nb:hover {
        color: #f3f3f3;
        border: 1px solid #f3f3f3;
      }
      .signupbtn {
        background-color: #2e415a;
      }
      .loginbtn {
        background-color: transparent;
      }
    `,
  ],
})

export class NavComponent {
  isAuthenticated: boolean = false;
  constructor(private router: Router) {}

  goToSignUp() {
    this.router.navigate(['/auth']);
  }

  goToSignIn() {
    this.router.navigate(['/auth']);
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