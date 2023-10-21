import {
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { ToastrService } from 'ngx-toastr';
import { IPlaylist, ISongs } from '../shared/app.model';
import { AppService } from '../shared/app.service';
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
  userProfile: boolean = false;
  isAuthenticated: boolean = false;

  searchTerm: string = '';
  foundSongs: ISongs[] = [];

  constructor(
    private router: Router,
    private authService: AuthService,
    private appService: AppService,
    private toastr: ToastrService,
    private renderer: Renderer2
  ) {}

  // To remove the display on esc click: the element has the ngif
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.searched = false;
    }
  }

  ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
    });

    const user = this.authService.getUser();
    this.user = user?.displayName;
    this.userImg = user?.photoURL;

    if (
      (this.user === null && this.userImg === null) ||
      (this.user === undefined && this.userImg === undefined)
    ) {
      this.userProfile = false;
    } else {
      this.userProfile = true;
    }
  }

  searchSongs() {
    this.appService.searchSongs(this.searchTerm).subscribe((songs) => {
      this.foundSongs = songs;
      this.searched = true;
    });
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
}

// To remove the display if clicked out element
//need much: only that the element must have the elemenntref
// @ViewChild('searchElement', { static: false }) searchElement!: ElementRef;
// // E no return false, i just tire.
// @HostListener('document:click', ['$event'])
// handleClick(event: Event) {
//   if (!this.searchElement.nativeElement.contains(event.target)) {
//     this.searched = false;
//   }
// }

// // Testing the setstyle of the renderer2 elementref
// someMethod() {
//   this.renderer.setStyle(
//     this.searchElement.nativeElement,
//     'background-color',
//     'blue'
//   );
// }
