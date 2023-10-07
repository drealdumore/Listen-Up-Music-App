import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './modal/modal.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { Error404Component } from './404.component';
import { PlayerComponent } from './userpage/player.component';
import { LikesComponent } from './userpage/likes.component';
import { HistoryComponent } from './userpage/history.component';
import { AppService } from './shared/app.service';
import { PlaylistDetail } from './userpage/playlists/playlist-detail.component';
import { NavComponent } from './nav/nav.component';
import { PlaylistComponent } from './userpage/playlists/playlist.component';
import { ThumbnailComponent } from './userpage/thumbnail.component';
import { CreatePlaylist } from './userpage/playlists/create-playlist.component';
import { PlaylistRouteResolver } from './userpage/playlists/playlist-route-resolver.service';
import { PlaylistList } from './userpage/playlists/playlist-list.component';
import { ScrollDirective } from './nav/scroll.directive';
import { AudioService } from './shared/audio-control.service';
import { FormatTimePipe } from './shared/time-format.pipe';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { PlayingComponent } from './userpage/player/playing.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalComponent,
    PlaylistComponent,
    Error404Component,
    LikesComponent,
    PlayerComponent,
    HistoryComponent,
    PlaylistDetail,
    NavComponent,
    ThumbnailComponent,
    CreatePlaylist,
    PlaylistList,
    ScrollDirective,
    // PlayingComponent,
    FormatTimePipe,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AppService, PlaylistRouteResolver, AudioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
