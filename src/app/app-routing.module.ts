import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// components imports
import {
  PlayerComponent,
  MatchComponent,
} from './components/index';


const routes: Routes = 
[

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }