import { Component, OnInit, ViewChild } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { Jugador } from 'src/app/class/player';
import { IonContent, Platform } from '@ionic/angular';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.page.html',
  styleUrls: ['./player-list.page.scss'],
})
export class PlayerListPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  backTop: boolean;
  players: any[]=[];
  offset=0;
  constructor(private playerApi: PlayerService, private platform: Platform) { }
  ngOnInit() {
    this.playerApi.getPlayerList().subscribe((p: any)=>{this.players=p;
    console.log(this.players);
    });
  }

  loadData($event){
    this.offset=+ 25;
    this.playerApi.getPlayerList(this.offset).subscribe((t2: any)=>{
      $event.target.complete();
      //this.players = this.players.concat(t2);
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
