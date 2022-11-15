import { Component, Input, OnInit } from '@angular/core';
import { MatchesService } from 'src/app/services/matches.service';
import { PlayersService } from 'src/app/services/players.service';
import { MatchModel } from 'src/app/utils/dataModels';
import { convertToMatchModel, validateMatch} from 'src/app/utils/helpers';

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
    console.log(inputData);
    this.newMatch = convertToMatchModel(inputData);
    console.log(this.newMatch)
    if (validateMatch(this.newMatch)) {
      console.log('match is okay')
    } else {
      console.log('match is not so okay')
    }
    
  }

  validateInput(inputData: any) {
    
  };
}
