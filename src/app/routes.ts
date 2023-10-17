import { Routes } from '@angular/router';
import { PlaylistComponent } from './playlists/playlist.component';
import { Error404Component } from './404.component';
import { LikesComponent } from './likes/likes.component';
import { HistoryComponent } from './history/history.component';
import { PlaylistDetail } from './playlists/playlist-detail.component';
import { CreatePlaylist } from './playlists/create-playlist.component';
import { PlaylistRouteResolver } from './playlists/playlist-route-resolver.service';
import { LoginComponent } from './auth/login.component';
import { SignupComponent } from './auth/signup.component';

export const appRoutes: Routes = [
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/signup', component: SignupComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'liked-songs', component: LikesComponent },
  { path: 'playlist', component: PlaylistComponent },
  { path: 'playlist/new', component: CreatePlaylist },

  {
    path: 'playlist/:id',
    component: PlaylistDetail,
    canActivate: [PlaylistRouteResolver],
  },
  { path: '', redirectTo: '/playlist', pathMatch: 'full' },
  { path: '**', component: Error404Component },
];
