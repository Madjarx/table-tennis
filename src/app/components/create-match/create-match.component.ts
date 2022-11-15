import { Component, Input, OnInit } from '@angular/core';
import { MatchesService } from 'src/app/services/matches.service';
import { PlayersService } from 'src/app/services/players.service';
import { MatchModel } from 'src/app/utils/dataModels';

@Component({
  selector: 'app-create-match',
  templateUrl: './create-match.component.html',
  styleUrls: ['./create-match.component.scss'],
})
export class CreateMatchComponent implements OnInit {
  newMatch: any;
  players: any;

  @Input()
  score: number[] = [];

  constructor(
    private playersService: PlayersService,
    private matchesService: MatchesService
  ) { }

  ngOnInit(): void {
    this.players = this.playersService.getAllPlayers();
  };

  onSubmit(inputData: any) {
    console.log(inputData)
    // this.validateInput(inputData);
    // then pass it to the service
  }

  validateInput(inputData: any) {
    
  };

  // add default values of 0 to the rest
  //check if player is null, if he is, say error
}
