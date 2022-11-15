import { Injectable } from '@angular/core';
import { PlayerModel } from '../utils/dataModels';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  players: Array<PlayerModel> = [];
  // players: {
  //   name: string,
  //   won: number
  // }[] = []

  constructor() {}

  getPlayer(name: string) {
    //
  };

  getAllPlayers() {
    return this.players;
  };

  createPlayer(newPlayerName: string) {
    let newPlayer: PlayerModel = {
      name: newPlayerName,
      won: 0
    };
    this.players.push(newPlayer);
  };
}
