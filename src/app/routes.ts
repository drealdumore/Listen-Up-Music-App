import { Routes } from '@angular/router';
import { PlaylistComponent } from './playlists/playlist.component';
import { Error404Component } from './404.component';
import { LikesComponent } from './likes/likes.component';
import { HistoryComponent } from './history/history.component';
import { PlaylistDetail } from './playlists/playlist-detail.component';
import { CreatePlaylist } from './playlists/create-playlist.component';
import { PlaylistRouteResolver } from './playlists/playlist-route-resolver.service';
import { LoginComponent } from './modal/login.component';
import { SignupComponent } from './modal/signup.component';
import { SettingsComponent } from './user/settings.component';
import { ProfileComponent } from './user/profile.component';

export const appRoutes: Routes = [
  { path: 'liked-songs', component: LikesComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/signup', component: SignupComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'playlist', component: PlaylistComponent },
  { path: 'user/settings', component: SettingsComponent },
  { path: 'user/profile', component: ProfileComponent },
  { path: 'playlist/new', component: CreatePlaylist },
  {
    path: 'playlist/:id',
    component: PlaylistDetail,
    canActivate: [PlaylistRouteResolver],
  },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/playlist', pathMatch: 'full' },
];
