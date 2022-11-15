import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
  players: any[] = [];

  constructor(private service: PlayersService) { }

  ngOnInit(): void {
    // this.service.getAllPlayers().subscribe((players) => this.players = players)
  };

  ngOnDestroy(): void {
    
  }

}
