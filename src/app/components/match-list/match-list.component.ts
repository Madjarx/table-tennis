import { Component, OnInit } from '@angular/core';
import { MatchesService } from 'src/app/services/matches.service';
import { MatchModel } from 'src/app/utils/dataModels';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss']
})
export class MatchListComponent implements OnInit {
  matches: Array<MatchModel> = []

  constructor(private service: MatchesService) { }

  ngOnInit(): void {
    this.matches = this.service.getAllMatches();
  }
}
