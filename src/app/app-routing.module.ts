import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'league-list',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'league-list',
    loadChildren: () => import('./pages/league-list/league-list.module').then( m => m.LeagueListPageModule)
  },
  {
    path: 'team-list',
    loadChildren: () => import('./pages/team-list/team-list.module').then( m => m.TeamListPageModule)
  },
  {
    path: 'player-list/:IdP/:nP',
    loadChildren: () => import('./pages/player-list/player-list.module').then( m => m.PlayerListPageModule)
  },
  {
    path: 'player-list',
    loadChildren: () => import('./pages/player-list/player-list.module').then( m => m.PlayerListPageModule)
  },
  {
    path: 'league-details/:idL/:nL',
    loadChildren: () => import('./pages/league-details/league-details.module').then( m => m.LeagueDetailsPageModule)
  },
  {
    path: 'team-details',
    loadChildren: () => import('./pages/team-details/team-details.module').then( m => m.TeamDetailsPageModule)
  },
  {
    path: 'player-details',
    loadChildren: () => import('./pages/player-details/player-details.module').then( m => m.PlayerDetailsPageModule)
  },
  {
    path: 'league-save',
    loadChildren: () => import('./pages/league-save/league-save.module').then( m => m.LeagueSavePageModule)
  },
  {
    path: 'league-save/:id',
    loadChildren: () => import('./pages/league-save/league-save.module').then( m => m.LeagueSavePageModule)
  },
  {
    path: 'team-new',
    loadChildren: () => import('./pages/team-new/team-new.module').then( m => m.TeamNewPageModule)
  },
  {
    path: 'team-edit',
    loadChildren: () => import('./pages/team-edit/team-edit.module').then( m => m.TeamEditPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
