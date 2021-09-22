import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'LEAGUES', url: '/league-list', icon: 'mail' },
    { title: 'TEAMS', url: '/team-list', icon: 'paper-plane' },
    { title: 'PLAYERS', url: '/player-list', icon: 'heart' },
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
