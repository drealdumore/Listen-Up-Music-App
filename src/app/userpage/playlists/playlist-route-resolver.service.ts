// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
// import { AppService } from 'src/app/shared/app.service';

// @Injectable()
// export class PlaylistRouteResolver implements Resolve<any> {
//   constructor(private appService: AppService, private router: Router) {}

//   resolve(route: ActivatedRouteSnapshot) {
//     // return this.appService.getPlaylist(route.params['id']);
//     const playlistExists= !!this.appService.getPlaylist(route.params['id'])

//     if (!playlistExists) this.router.navigate(['404'])
//   }
// }

import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  Resolve,
  Router,
} from '@angular/router';
import { AppService } from 'src/app/shared/app.service';

@Injectable()
export class PlaylistRouteResolver implements CanActivate {
  constructor(private appService: AppService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): any {
    // return this.appService.getPlaylist(route.params['id']);
    const playlistExists = !!this.appService.getPlaylist(route.params['id']);

    if (!playlistExists) this.router.navigate(['404']);
    return playlistExists;
  }
}
