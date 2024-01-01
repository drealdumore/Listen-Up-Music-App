import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyService {
  private searchUrl!: string;
  private redirect_uri!: string;
  private client_id = '996080937ebb4594a0979146c9c0c121';
  private client_secret = '0bda3cfd213c4622bc6c562586568ec8';
  private access_token!: string;
  private ArtistUrl!: string;
  private AlbumsUrl!: string;
  private AlbumUrl!: string;
  private encoded = btoa(this.client_id + ':' + this.client_secret);
  private base64 = 'OTk2MDgwOTM3ZWJiNDU5NGEwOTc5MTQ2YzljMGMxMjE6MGJkYTNjZmQyMTNjNDYyMmJjNmM1NjI1ODY1NjhlYzg=';

  constructor(private _http: HttpClient) {}

  getToken(): Observable<any> {
    const body = 'grant_type=client_credentials';
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + this.encoded,
    });

    return this._http.post('https://accounts.spotify.com/api/token', body, { headers }).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  searchMusic(str: string, type = 'artist', token: string): Observable<any> {
    this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=50&type=' + type;
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });

    return this._http.get(this.searchUrl, { headers }).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getArtist(id: string, token: string): Observable<any> {
    this.ArtistUrl = 'https://api.spotify.com/v1/artists/' + id;
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });

    return this._http.get(this.ArtistUrl, { headers }).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getAlbums(artistId: string, token: string): Observable<any> {
    this.AlbumsUrl = 'https://api.spotify.com/v1/artists/' + artistId + '/albums/?query=&limit=50';
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });

    return this._http.get(this.AlbumsUrl, { headers }).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getAlbum(id: string, token: string): Observable<any> {
    this.AlbumUrl = 'https://api.spotify.com/v1/albums/' + id;
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });

    return this._http.get(this.AlbumUrl, { headers }).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
