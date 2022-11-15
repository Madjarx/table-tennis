import { Component, OnInit } from '@angular/core';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.scss']
})
export class CreatePlayerComponent implements OnInit {

  constructor(private service: PlayersService) { 
  }

  ngOnInit(): void {

  }

  onSubmit(name: string) {
    console.log("Logging the name " + name)
    this.service.createPlayer(name);
  };
}
