import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeagueSavePage } from './league-save.page';

const routes: Routes = [
  {
    path: '',
    component: LeagueSavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeagueSavePageRoutingModule {}
