import { Component, HostListener, Renderer2, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { ToastrService } from 'ngx-toastr';
import { ISongs } from '../shared/app.model';
import { AppService } from '../shared/app.service';
import { FormControl } from '@angular/forms';
import { SpotifyService } from '../shared/spotifyservice.service';

@Component({
  selector: 'navigation',
  templateUrl: './nav.component.html',
})
export class NavComponent {
  searched: boolean = false;
  isVisible: boolean = false;
  displayLogout: boolean = false;
  displayProfile: boolean = false;
  displaySetting: boolean = false;
  displaySupport: boolean = false;

  user: any;
  userImg: any;
  userEmail: any;
  userProfile: boolean = false;
  cated: boolean = false;

  searchTerm: string = '';
  foundSongs: ISongs[] = [];
  noSearch: boolean = false;
  selectedSongId: string | null = null;
  isAuthenticated: boolean = false;

private spotifyService = inject(SpotifyService)

  constructor(
    private router: Router,
    private authService: AuthService,
    private appService: AppService,
    private toastr: ToastrService,
  ) {
    this.checkScreenWidth();
  }

  ngOnInit(): void {
    // to check authentication state
    this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
    });

    // to get user display name and img from their email
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser).displayName;
      this.userImg = JSON.parse(storedUser).photoURL;
      this.userEmail = JSON.parse(storedUser).email;
    }

    if (this.user === null || this.userImg === null) {
      this.userProfile = false;
    } else {
      this.userProfile = true;
    }
    this.newNickname.setValue(this.user);

  }

  newNickname: FormControl = new FormControl('');

  setNickname() {
    const newNickname = this.newNickname.value.trim();
    if (newNickname !== '') {
      this.authService.setDisplayName(newNickname);
    }
    this.hideProfile();
  }

  // To remove the display on esc click: the element has the ngif
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.searched = false;
    }
  }

  // function to search for songs
  searchSongs() {
    this.spotifyService.search(this.searchTerm, 'track').subscribe((songs) => {
    // this.appService.searchSongs(this.searchTerm).subscribe((songs) => {
      this.foundSongs = songs;
      console.log(songs);
      
      this.searched = true;
      if (this.foundSongs.length === 0) {
        this.noSearch = true;
      } else {
        this.noSearch = false;
      }
    });
    
  }

  // when clicked to navigate to the playlist with the seacrh song
  navigateToPlaylist(songId: string): void {
    this.router.navigate(['/playlist', songId]);
    setTimeout(() => {
      this.searched = false;
      this.selectedSongId = null;
    }, 500);
  }

  goToSignUp() {
    this.router.navigate(['/auth/signup']);
  }

  goToSignIn() {
    this.router.navigate(['/auth/login']);
  }

  // if click on img, add visible class to display
  visible() {
    setTimeout(() => {
      this.isVisible = true;
    }, 200);
  }

  notvisible() {
    setTimeout(() => {
      this.isVisible = false;
    }, 150);
  }

  logout() {
    this.authService
      .logOut()
      .then((res: any) => {
        this.toastr.success('Successfully Logged Out.');
        this.displayLogout = false;
        setTimeout(() => {
          this.router.navigate(['/playlist']);
        }, 300);
      })
      .catch((error: any) => {
        this.toastr.error('error');
      });
  }

  showProfile() {
    setTimeout(() => {
      this.displayProfile = true;
      this.isVisible = false;
    }, 100);
  }

  hideProfile() {
    setTimeout(() => {
      this.displayProfile = false;
      this.isVisible = true;
    }, 100);
  }

  showSetting() {
    setTimeout(() => {
      this.displaySetting = true;
      this.isVisible = false;
    }, 100);
  }

  hideSetting() {
    setTimeout(() => {
      this.displaySetting = false;
      this.isVisible = true;
    }, 100);
  }

  showSupport() {
    setTimeout(() => {
      this.displaySupport = true;
      this.isVisible = false;
    }, 100);
  }

  hideSupport() {
    setTimeout(() => {
      this.displaySupport = false;
      this.isVisible = true;
    }, 100);
  }

  showLogout() {
    setTimeout(() => {
      this.displayLogout = true;
      this.isVisible = false;
    }, 100);
  }

  hideLogout() {
    setTimeout(() => {
      this.displayLogout = false;
      this.isVisible = true;
    }, 100);
  }

  isHidden = false;

  hideUser() {
    this.isHidden = true;
  }

  showUser() {
    this.isHidden = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkScreenWidth();
  }

  checkScreenWidth(): void {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 320 && screenWidth <= 480) {
      this.isHidden = false;
    } else {
      this.isHidden = true;
    }
  }
}
