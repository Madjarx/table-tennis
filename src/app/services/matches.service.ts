import { Injectable } from '@angular/core';
import { MatchModel } from '../utils/dataModels';
import { PlayersService } from '../services/players.service';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  matches: Array<MatchModel> = []
  
  constructor(private players: PlayersService) { }

  getAllMatches() {
    return this.matches;
  };

  getMatch(index: number) {
    return this.matches[index];
  };

  detectWon(match: MatchModel) {
    let wins1 = 0
    let wins2 = 0

    let player1 = this.players.getPlayer(match.player1)!!;
    let player2 = this.players.getPlayer(match.player2)!!;

    for (let i = 0; i < 10; i+=2) {      
      let score1 = match.score[i];
      let score2 = match.score[i+1];

      wins1 += (score1 > score2) ? 1 : 0;
      wins2 += (score2 > score1) ? 1 : 0;
    }

    player1.won += (wins1 > wins2) ? 1 : 0;
    player2.won += (wins2 > wins1) ? 1 : 0;

    (wins1 > wins2) ? this.players.repoortWon(player1, wins1) : null;
    (wins2 > wins1) ? this.players.repoortWon(player2, wins2) : null;

    // this.players.refresh(); // not needed if "reportWon" does it.
  }

  createMatch(player1: string, player2: string, score: number[]) {
    let newMatch: MatchModel = {
      player1, 
      player2,
      score
     }

    this.matches.push(newMatch);

    this.detectWon(newMatch);
  };
};
