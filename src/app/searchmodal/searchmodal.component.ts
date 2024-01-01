import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'searchmodal',
  templateUrl: './searchmodal.component.html',
  styleUrls: ['./searchmodal.component.css'],
})
export class SearchmodalComponent {
  searchTerm: any;
  noSearch: boolean = false;
  @Input() foundSongs: any[] = [];
  @Input() searched: boolean = false;
  selectedSongId: string | null = null;

  private router = inject(Router)

  navigateToPlaylist(songId: string): void {
    this.router.navigate(['/playlist', songId]);
    setTimeout(() => {
      this.searched = false;
      this.selectedSongId = null;
    }, 500);
  }
}
