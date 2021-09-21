import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeagueDetailsPageRoutingModule } from './league-details-routing.module';

import { LeagueDetailsPage } from './league-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeagueDetailsPageRoutingModule
  ],
  declarations: [LeagueDetailsPage]
})
export class LeagueDetailsPageModule {}
