import { Component, OnInit } from '@angular/core';
import { LeagueService } from 'src/app/services/league.service';
import { Liga } from 'src/app/class/league';

import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, Platform } from '@ionic/angular';
//import { MessageService } from '../../Services/message.service';
//import { LoadingService } from '../../Services/loading.service';
//import { DatePicker } from '@ionic-native/date-picker/ngx';
//import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-league-save',
  templateUrl: './league-save.page.html',
  styleUrls: ['./league-save.page.scss'],
})
export class LeagueSavePage implements OnInit {
  ligaA: any[]=[];
  ligaL: Liga;
  constructor(
    private actRoute: ActivatedRoute,
    private ligaService: LeagueService) { }

  ngOnInit() {
    const params = this.actRoute.snapshot.params;

    if (params && params.id) {
      this.ligaService.getLiga(params.id).subscribe(res => {
        if (res) {
          this.ligaA = res;
          console.log(this.ligaA);
        }else{
          this.ligaL = new Liga();
        }
      });
    } else {
      this.ligaL = new Liga();
    }
  }

}
