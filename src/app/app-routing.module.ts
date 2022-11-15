import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// components imports
import {
  PlayerComponent,
  PlayerListComponent,
  MatchComponent,
  HomepageComponent,
  MatchListComponent,
  NotfoundComponent
} from './components/index';


const routes: Routes = 
[
  { path: '', component: HomepageComponent },
  { path: 'playerlist', component: PlayerListComponent},
  {path: 'player/:id', component: PlayerComponent},
  { path: 'matchlist', component: MatchListComponent},
  { path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }