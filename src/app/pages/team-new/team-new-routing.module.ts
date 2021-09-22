import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamNewPage } from './team-new.page';

const routes: Routes = [
  {
    path: '',
    component: TeamNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamNewPageRoutingModule {}
