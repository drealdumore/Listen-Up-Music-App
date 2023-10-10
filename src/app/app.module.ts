import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { Error404Component } from './404.component';
import { PlayerComponent } from './player/player.component';
import { LikesComponent } from './likes/likes.component';
import { HistoryComponent } from './history/history.component';
import { AppService } from './shared/app.service';
import { PlaylistDetail } from './playlists/playlist-detail.component';
import { NavComponent } from './nav/nav.component';
import { PlaylistComponent } from './playlists/playlist.component';
import { ThumbnailComponent } from './userpage/thumbnail.component';
import { CreatePlaylist } from './playlists/create-playlist.component';
import { PlaylistRouteResolver } from './playlists/playlist-route-resolver.service';
import { PlaylistList } from './playlists/playlist-list.component';
import { ScrollDirective } from './nav/scroll.directive';
import { AudioService } from './shared/audio-control.service';
import { FormatTimePipe } from './shared/time-format.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { LoginComponent } from './modal/login.component';
import { SignupComponent } from './modal/signup.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { ProfileComponent } from './user/profile.component';
import { SettingsComponent } from './user/settings.component';
import { LikesService } from './shared/likes.service';
import { LikesList } from './likes/likes-list.component';

@NgModule({
  declarations: [
    AppComponent,
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
    FormatTimePipe,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    SettingsComponent,
    LikesList
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [AppService, PlaylistRouteResolver, AudioService, LikesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
