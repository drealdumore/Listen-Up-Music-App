import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './create-playlist.component.html',
})
export class CreatePlaylist implements OnInit {
  titleIsClicked: boolean = false;
  name: string = 'my playlist #1';
  description: string = 'Playlist Description';

  changeName!: FormGroup;
  nameCtrl!: FormControl;
  descriptionCtrl!: FormControl;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.nameCtrl = new FormControl();
    this.descriptionCtrl = new FormControl();

    this.changeName = new FormGroup({
      name: this.nameCtrl,
      description: this.descriptionCtrl,
    });
  }

  saveName(formValues: { name: string; description: string }) {
    if (this.changeName.valid) {
      // i want to change the playlist name
      // and description to the new specified name
      // and then a small playlist item get added to the nav bar, but
      // that will be stressful, so....
      this.name = formValues.name;
      this.description = formValues.description;
      this.router.navigate(['/playlist/new']);
      this.titleIsClicked = false;
    }
  }

  renamePlaylist() {
    setTimeout(() => {
      this.titleIsClicked = true;
    }, 50);
  }
  closeRenamePlaylist() {
    setTimeout(() => {
      this.titleIsClicked = false;
    }, 50);
  }
}
