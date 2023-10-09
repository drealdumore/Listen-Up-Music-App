import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlaylistComponent } from './userpage/playlists/playlist.component';
import { Error404Component } from './404.component';
import { LikesComponent } from './userpage/likes.component';
import { HistoryComponent } from './userpage/history.component';
import { PlaylistDetail } from './userpage/playlists/playlist-detail.component';
import { CreatePlaylist } from './userpage/playlists/create-playlist.component';
import { PlaylistRouteResolver } from './userpage/playlists/playlist-route-resolver.service';
import { LoginComponent } from './modal/login.component';
import { SignupComponent } from './modal/signup.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'liked-songs', component: LikesComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/signup', component: SignupComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'playlist', component: PlaylistComponent },
  { path: 'playlist/new', component: CreatePlaylist },
  {
    path: 'playlist/:id',
    component: PlaylistDetail,
    canActivate: [PlaylistRouteResolver],
  },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/playlist', pathMatch: 'full' },
];
