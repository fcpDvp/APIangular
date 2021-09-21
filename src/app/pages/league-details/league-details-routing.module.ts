import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeagueDetailsPage } from './league-details.page';

const routes: Routes = [
  {
    path: '',
    component: LeagueDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeagueDetailsPageRoutingModule {}
