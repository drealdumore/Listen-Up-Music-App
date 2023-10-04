import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './modal/modal.component';
import { PlaylistComponent } from './userpage/playlists/playlist.component';
import { Error404Component } from './404.component';
import { LikesComponent } from './userpage/likes.component';
import { HistoryComponent } from './userpage/history.component';
import { PlaylistDetail } from './userpage/playlists/playlist-detail.component';
import { CreatePlaylist } from './userpage/playlists/create-playlist.component';
import { PlaylistRouteResolver } from './userpage/playlists/playlist-route-resolver.service';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'liked-songs', component: LikesComponent },
  { path: 'auth', component: ModalComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'playlist', component: PlaylistComponent },
  { path: 'playlist/new', component: CreatePlaylist },
  {
    path: 'playlist/:id',
    component: PlaylistDetail,
    canActivate: [PlaylistRouteResolver],
  },
  // {
  //   path: 'playlist/:id',
  //   component: PlaylistDetail,
  //   resolve: { playlist: PlaylistRouteResolver },
  // },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
