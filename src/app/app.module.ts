import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { Error404Component } from './404.component';
import { PlayerComponent } from './userpage/player/player.component';
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
import { AngularFireModule } from '@angular/fire/compat';
import { LoginComponent } from './modal/login.component';
import { SignupComponent } from './modal/signup.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
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
    SignupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
  ],
  providers: [AppService, PlaylistRouteResolver, AudioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
