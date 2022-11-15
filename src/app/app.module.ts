import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  PlayerComponent,
  MatchComponent,
  PlayerListComponent,
  MatchListComponent,
  CreatePlayerComponent,
  CreateMatchComponent,
  NavigationComponent
} from './components/index';
import { MatchesService } from './services/matches.service';
import { PlayersService } from './services/players.service';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NotfoundComponent } from './components/notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    MatchComponent,
    PlayerListComponent,
    MatchListComponent,
    CreateMatchComponent,
    CreatePlayerComponent,
    NavigationComponent,
    HomepageComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PlayersService,
    MatchesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
