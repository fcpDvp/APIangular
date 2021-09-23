import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamEditPageRoutingModule } from './team-edit-routing.module';

import { TeamEditPage } from './team-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamEditPageRoutingModule
  ],
  declarations: [TeamEditPage]
})
export class TeamEditPageModule {}
