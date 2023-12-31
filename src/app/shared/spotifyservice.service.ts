import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  private url = 'https://api.spotify.com/v1/';

  private http = inject(HttpClient);

  search(str: string, type: string): Observable<any> {
    const searchUrl = `${this.url}search?query=${str}&offset=0&limit=20&type=${type}&market=US`;

    return this.http.get(searchUrl).pipe(
      map((res: any) => {
        return res.JSON();
      })
    );
  }

  //   return this.http.get(searchUrl).pipe(
  //     map((res: any) => {
  //       try {
  //         return JSON.parse(res);
  //       } catch (error) {
  //         console.error('Error parsing JSON response:', error);
  //         throw error;
  //       }
  //     })
  //   );
  // }
}
