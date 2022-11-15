import { Injectable } from '@angular/core';
import { MatchModel } from '../utils/dataModels';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {
  matches: Array<MatchModel> = []

  constructor() { }

  getAllMatches() {
    return this.matches;
  };

  getMatch(index: number) {
    return this.matches[index];
  };

  createMatch(player1: string, player2: string, score: number[]) {
    const newMatch: MatchModel = {
      player1, player2, score
    }
  };
}
