import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
} from '@angular/router';
import { AppService } from 'src/app/shared/app.service';

@Injectable({
  providedIn: 'root',
})
export class PlaylistRouteResolver implements CanActivate {
  constructor(private appService: AppService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): any {
    const playlistExists = !!this.appService.getPlaylist(route.params['id']);

    if (!playlistExists) this.router.navigate(['404']);
    return playlistExists;
  }
}
