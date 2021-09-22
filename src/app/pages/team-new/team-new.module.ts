import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamNewPageRoutingModule } from './team-new-routing.module';

import { TeamNewPage } from './team-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamNewPageRoutingModule
  ],
  declarations: [TeamNewPage]
})
export class TeamNewPageModule {}
