import {
  Component,
  EventEmitter,
  HostListener,
  Output,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { ToastrService } from 'ngx-toastr';
import { ISongs } from '../shared/app.model';
import { AppService } from '../shared/app.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SpotifyService } from '../shared/spotifyservice.service';
import { debounceTime, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'navigation',
  templateUrl: './nav.component.html',
})
export class NavComponent {
  input: string = '';

  searched: boolean = false;
  isVisible: boolean = false;
  displayLogout: boolean = false;
  displayProfile: boolean = false;
  displaySetting: boolean = false;
  displaySupport: boolean = false;
  userProfile: boolean = false;

  searchInput!: FormGroup;

  user: string = '';
  userImg: string = '';
  userEmail: string = '';

  searchTerm: string = '';
  foundSongs: ISongs[] = [];
  noSearch: boolean = false;
  selectedSongId: string | null = null;
  isAuthenticated: boolean = false;

  private spotifyService = inject(SpotifyService);
  private fb = inject(FormBuilder);

  constructor(
    private router: Router,
    private authService: AuthService,
    private appService: AppService,
    private toastr: ToastrService
  ) {
    this.checkScreenWidth();

    this.searchInput = this.fb.group({
      input: [''],
    });

    this.input = this.searchInput.get('input')?.value;

    this.searchInput
      .get('input')
      ?.valueChanges.pipe(debounceTime(100))
      .subscribe(() => {
        this.searchSongs('track');
      });
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

  searchSongs(filterTerm: string) {
    this.spotifyService
      .getToken()
      .pipe(
        mergeMap((tokenResponse) => {
          const token = tokenResponse.access_token;
          const searchTerm = this.searchInput.get('input')?.value;
          return this.spotifyService.searchMusic(searchTerm, filterTerm, token);
        })
      )
      .subscribe(
        (songs) => {
          this.foundSongs = songs[`${filterTerm}s`]?.items || [];
          this.searched = true;
          console.log(
            '🚀 ~ file: nav.component.ts:115 ~ NavComponent ~ searchSongs ~ this.foundSongs:',
            this.foundSongs
          );
          this.noSearch = this.foundSongs.length === 0;
        },
        (error) => {
          console.error('Error during search:', error);
        }
      );
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


