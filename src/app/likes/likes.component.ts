import { Component } from '@angular/core';
import { LikesService } from '../shared/likes.service';
import { ISongs } from '../shared/app.model';

@Component({
  templateUrl: './likes.component.html',
})
export class LikesComponent {
  title: string = 'Liked Songs';
  likedSongs: ISongs[] = [];

  constructor(private likeService: LikesService) {}
  public isSidebarOpen = true;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.menuBtnChange();
  }

  menuBtnChange() {
    const btnIcon = this.isSidebarOpen ? 'bx-menu-alt-right' : 'bx-menu';
    const btnElement = document.getElementById('btn');
    if (btnElement) {
      btnElement.classList.replace('bx-menu', btnIcon);
    }
  }

  ngOnInit() {
    // to get liked songs array
    this.likedSongs = this.likeService.getLikes();
  }
}
