import { Component, OnInit } from '@angular/core';
import { Equipo } from 'src/app/class/team';
import { TeamService } from 'src/app/services/team.service';


@Component({
  selector: 'app-league-details',
  templateUrl: './league-details.page.html',
  styleUrls: ['./league-details.page.scss'],
})
export class LeagueDetailsPage implements OnInit {
  teams: any[] = [];

  constructor(private teamApi: TeamService) { }
  ngOnInit() {this.teamApi.getEquipos().subscribe((res: any)=>{
      this.teams = res;
      console.log(this.teams);
    });
  }

  nuevoEquipo(id: string){
    console.log(id);
  }
}
