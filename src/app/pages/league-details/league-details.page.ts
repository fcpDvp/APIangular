import { Component, OnInit } from '@angular/core';
import { Equipo } from 'src/app/class/team';
import { TeamService } from 'src/app/services/team.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-league-details',
  templateUrl: './league-details.page.html',
  styleUrls: ['./league-details.page.scss'],
})
export class LeagueDetailsPage implements OnInit {
  teams: Equipo;
  //teams: any[] = [];
  idLFiltrar: string;
  nLFiltrar: string;
  filEq = '';
  constructor(private teamApi: TeamService, private activeRouter: ActivatedRoute, private router: Router) { }
  ngOnInit(): void{
    // eslint-disable-next-line prefer-const
    this.idLFiltrar = this.activeRouter.snapshot.paramMap.get('idL');
    this.nLFiltrar = this.activeRouter.snapshot.paramMap.get('nL');
    //console.log(this.idLFiltrar);
    this.teamApi.getEquipos().subscribe((res: any)=>{
    this.teams = res;
    });

  }

  //filtroEq(ngDt: string){
    //if (ngDt===this.idLFiltrar){this.x=false;}else{this.x=true;}
  //}

  filtroJugadores(idL: string, nL: string){
    this.router.navigate(['player-list', idL, nL]);
  }

  nuevoEquipo(id: string){
    console.log(id);
  }
}
