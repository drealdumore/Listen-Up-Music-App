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
import { LoaderSubService } from '../shared/loader-sub.service';

@Component({
  selector: 'searchmodal',
  templateUrl: './searchmodal.component.html',
  styleUrls: ['./searchmodal.component.css'],
})
export class SearchmodalComponent implements OnInit {
  @Input() foundSongs: any[] = [];
  @Input() searched: boolean = false;
  @Input() searchTerm: string = '';
  @Input() activeFilter: string = '';

  @Output() filterClick = new EventEmitter<string>();

  filterTerm: string = '';
  selectedSongId: string | null = null;
  noSearch: boolean = false;

  private router = inject(Router);
  private loaderService = inject(LoaderSubService);

  showLoader$ = this.loaderService.loadingAction$;

  ngOnInit(): void {
    this.loaderService.showLoader();
  }

  searchSongs(clickedTerm: string) {
    this.filterTerm = clickedTerm;
    this.filterClick.emit(this.filterTerm);
  }

  navigateToPlaylist(songId: string): void {
    this.router.navigate(['/playlist', songId]);
    setTimeout(() => {
      this.searched = false;
      this.selectedSongId = null;
    }, 500);
  }
}
