import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LeagueListPageRoutingModule } from './league-list-routing.module';
import { LeagueListPage } from './league-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeagueListPageRoutingModule,
    CommonModule
  ],
  declarations: [LeagueListPage]
})
export class LeagueListPageModule {}
