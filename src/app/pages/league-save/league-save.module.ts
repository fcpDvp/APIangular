import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeagueSavePageRoutingModule } from './league-save-routing.module';

import { LeagueSavePage } from './league-save.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeagueSavePageRoutingModule
  ],
  declarations: [LeagueSavePage]
})
export class LeagueSavePageModule {}
