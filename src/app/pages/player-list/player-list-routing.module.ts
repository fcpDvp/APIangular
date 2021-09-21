import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerListPage } from './player-list.page';

const routes: Routes = [
  {
    path: '',
    component: PlayerListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayerListPageRoutingModule {}
