import { Injectable } from '@angular/core';
import { PlayerModel, MatchModel } from '../utils/dataModels';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  players: Array<PlayerModel> = [];
  // players: Observable<PlayerModel[]> = [];

  constructor() {}

  getPlayer(name: string) {
    return this.players.find(player => (player.name === name ? player : null));
  };

  getAllPlayers() {
    // return new Observable()
    return this.players;
    // return ;
  };

  refresh() {
    // localStorage.setItem('players', JSON.stringify(this.players));
    this.players.sort((a, b) => (a.won > b.won ? 1 : -1));
  };

  repoortWon(player: PlayerModel, sets: number) {
    player.won += sets;
    this.refresh();
  }
  
  reportMatch(match: MatchModel) {
    // this.players.forEach(player => {
    //   player.won++;
    // });
    this.refresh();
  }

  createPlayer(newName: string) {
    // dont let the user insert another player if the name is already taken
    let foundPlayer = this.players.find(player => player.name === newName);
    if(foundPlayer) {
      // return new Error()
      return window.alert('Woops, player names must be unique')
    }

    let newPlayer: PlayerModel = {
      name: newName,
      won: 0
    };
    this.players.push(newPlayer); 
    this.refresh();
    console.log(newPlayer);
    return newPlayer; 
  };
}
