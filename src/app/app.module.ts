import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { MatchComponent } from './components/match/match.component';
// import { PlayerListComponent } from './components/player-list/player-list.component';
// import { MatchListComponent } from './components/match-list/match-list.component';
// import { CreateMatchComponent } from './components/create-match/create-match.component';
// import { CreatePlayerComponent } from './components/create-player/create-player.component';

import {
  PlayerComponent,
  MatchComponent,
  PlayerListComponent,
  MatchListComponent,
  CreatePlayerComponent,
  CreateMatchComponent,
  NavigationComponent
} from './components/index';


@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    MatchComponent,
    PlayerListComponent,
    MatchListComponent,
    CreateMatchComponent,
    CreatePlayerComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
