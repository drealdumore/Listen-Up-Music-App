import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { Error404Component } from './404.component';
import { PlayerComponent } from './player/player.component';
import { LikesComponent } from './likes/likes.component';
import { HistoryComponent } from './history/history.component';
import { AppService } from './shared/app.service';
import { PlaylistDetail } from './playlists/playlist-detail.component';
import { NavComponent } from './nav/nav.component';
import { PlaylistComponent } from './playlists/playlist.component';
import { ThumbnailComponent } from './thumbnail.component';
import { CreatePlaylist } from './playlists/create-playlist.component';
import { PlaylistRouteResolver } from './playlists/playlist-route-resolver.service';
import { PlaylistList } from './playlists/playlist-list.component';
import { ScrollDirective } from './nav/scroll.directive';
import { AudioService } from './shared/audio-control.service';
import { FormatTimePipe } from './shared/time-format.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { LoginComponent } from './auth/login.component';
import { SignupComponent } from './auth/signup.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
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
    LikesList,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [
    AppService,
    PlaylistRouteResolver,
    AudioService,
    LikesService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
