import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { PlayerModel } from 'src/app/utils/dataModels';
import { PlayersService } from 'src/app/services/players.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  id: any;
  player: any;

  constructor(
    private location: Location,
    private service: PlayersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.player = this.service.getPlayer(this.id);
  }

  navigateBack() {
    this.location.back();
  }
}
