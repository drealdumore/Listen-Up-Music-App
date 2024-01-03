import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from '../shared/loader.service';
import { SpotifyService } from '../shared/spotifyservice.service';
import { mergeMap, tap } from 'rxjs';

@Component({
  selector: 'searchmodal',
  templateUrl: './searchmodal.component.html',
  styleUrls: ['./searchmodal.component.css'],
})
export class SearchmodalComponent implements OnInit {
  @Input() foundSongs: any[] = [];
  @Input() searched: boolean = false;
  @Input() searchTerm: string = '';

  @Output() filterClick = new EventEmitter<string>();
  filterTerm: string = '';
  selectedSongId: string | null = null;
  noSearch: boolean = false;

  private router = inject(Router);
  private spotifyService = inject(SpotifyService);
  private loaderService = inject(LoaderService);

  showLoader$ = this.loaderService.loadingAction$;

  ngOnInit(): void {
    this.loaderService.showLoader();
  }
  navigateToPlaylist(songId: string): void {
    this.router.navigate(['/playlist', songId]);
    setTimeout(() => {
      this.searched = false;
      this.selectedSongId = null;
    }, 500);
  }

  searchSongs(clickedTerm: string) {
    this.filterTerm = clickedTerm;
    this.filterClick.emit(this.filterTerm);
    console.log(this.filterTerm);
  }

  // search(filterTerm: string) {
  //   this.spotifyService
  //     .getToken()
  //     .pipe(
  //       tap((data) => {
  //         this.loaderService.hideLoader();
  //       }),
  //       mergeMap((tokenResponse) => {
  //         const token = tokenResponse.access_token;
  //         return this.spotifyService.searchMusic(
  //           this.searchTerm,
  //           filterTerm,
  //           token
  //         );
  //       })
  //     )
  //     .subscribe(
  //       (songs) => {
  //         this.foundSongs = songs[`${filterTerm}s`]?.items || [];
  //         this.searched = true;
  //         console.log('🚀 this.foundSongs:', this.foundSongs);
  //         this.noSearch = this.foundSongs.length === 0;
  //       },
  //       (error) => {
  //         console.error('Error during search:', error);
  //       }
  //     );
  // }
}
