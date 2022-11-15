import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlayersService } from 'src/app/services/players.service';
import { PlayerModel } from 'src/app/utils/dataModels';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
  players: Array<PlayerModel> = [];

  constructor(private service: PlayersService) { }

  ngOnInit(): void {
    // this.service.getAllPlayers().subscribe((players: any) => this.players = players)
    this.players = this.service.getAllPlayers()
    console.log(this.players)
  };
}
