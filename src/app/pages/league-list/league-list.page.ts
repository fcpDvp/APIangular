import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { LeagueService } from 'src/app/services/league.service';
import { Liga } from 'src/app/class/league';
import { IonContent, Platform } from '@ionic/angular';

@Component({
  selector: 'app-league-list',
  templateUrl: './league-list.page.html',
  styleUrls: ['./league-list.page.scss'],
})
export class LeagueListPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  backTop: boolean;
  //@Input() lgI: string;
  //@Output() lgO: Liga[];
  leagues: any[]=[];
  offset=0;
  constructor(private leagueApi: LeagueService, private platform: Platform) { }
  ngOnInit() { this.leagueApi.getLeagueList().subscribe((l: any)=>{
    this.leagues=l;
    console.log(this.leagues);
    });
  }

  loadData($event){
    this.offset=+ 25;
    this.leagueApi.getLeagueList(this.offset).subscribe((l2: any)=>{
      $event.target.complete();
      //this.leagues = this.leagues.concat(l2);
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
