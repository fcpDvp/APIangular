import { Component, OnInit, ViewChild } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';
import { Equipo } from 'src/app/class/team';
import { IonContent, Platform } from '@ionic/angular';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.page.html',
  styleUrls: ['./team-list.page.scss'],
})
export class TeamListPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  backTop: boolean;
  teams: any[]=[];
  offset = 0;
  constructor(private teamApi: TeamService, private platform: Platform) { }
  ngOnInit() {
    this.teamApi.getTeamList().subscribe((t: any)=>{this.teams=t;
    console.log(this.teams);
    });
  }

  loadData($event){
    this.offset=+ 25;
    this.teamApi.getTeamList(this.offset).subscribe((t2: any)=>{
      $event.target.complete();
      this.teams = t2;
      });
  }

  logScrolling($event: {detail: {scrollTop: number}}){
    if($event.detail.scrollTop > this.platform.height()){
      this.backTop=true;}
    else{
      this.backTop=false;
    }
  }
  gotoTop(){
    this.content.scrollToTop(1000);
  }
}
