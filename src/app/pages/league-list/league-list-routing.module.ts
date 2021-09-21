import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeagueListPage } from './league-list.page';

const routes: Routes = [
  {
    path: '',
    component: LeagueListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeagueListPageRoutingModule {}
