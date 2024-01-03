import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  private searchUrl!: string;
  private client_id = '5c22ecf3c8e04c46bf560ce624cbbb58';
  private client_secret = '20f4dbc8ab9d4450ace088f5546efd76';
  private ArtistUrl!: string;
  private getUrl!: string;
  private encoded = btoa(this.client_id + ':' + this.client_secret);

  private url = 'https://api.spotify.com/v1';

  private http = inject(HttpClient);

  getToken(): Observable<any> {
    const body = 'grant_type=client_credentials';
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + this.encoded,
    });

    return this.http
      .post('https://accounts.spotify.com/api/token', body, { headers })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  search(str: string, type: string): Observable<any> {
    const searchUrl = `${this.url}search?query=${str}&offset=0&limit=20&type=${type}&market=US`;

    return this.http.get(searchUrl).pipe(
      map((res: any) => {
        return res.JSON();
      })
    );
  }

  searchMusic(str: string, type: string, token: string): Observable<any> {
    this.searchUrl = `${this.url}/search?query=${str}&offset=0&limit=50&type=${type}&market=US`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });

    return this.http.get(this.searchUrl, { headers }).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getPlaylists(token: string): Observable<any> {
    this.getUrl = `${this.url}/browse/featured-playlists?country=NG&timestamp=2024-01-01T16%3A34%3A32&offset=0&limit=20`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });

    return this.http.get(this.getUrl, { headers }).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getPlaylist(playlist_id: string, token: string): Observable<any> {
    this.getUrl = `${this.url}/playlists/${playlist_id}`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });

    return this.http.get(this.getUrl, { headers }).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getPlaylistsItems(playlist_id: string, token: string): Observable<any> {
    this.getUrl = `${this.url}/playlists/${playlist_id}/tracks`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });

    return this.http.get(this.getUrl, { headers }).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getArtist(id: string, token: string): Observable<any> {
    this.ArtistUrl = `${this.url}/artists/${id}`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });

    return this.http.get(this.ArtistUrl, { headers }).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getAlbums(artistId: string, token: string): Observable<any> {
    this.getUrl = `${this.url}/artists/${artistId}/albums/?query=&limit=50`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });

    return this.http.get(this.getUrl, { headers }).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getAlbum(id: string, token: string): Observable<any> {
    this.getUrl = `${this.url}/albums/${id}`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });

    return this.http.get(this.getUrl, { headers }).pipe(
      map((res: any) => {
        return res.JSON();
      })
    );
  }
}
