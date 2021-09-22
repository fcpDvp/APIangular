import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient){}

  getTeamList(offset = 0){
    return this.http.get(`${environment.playFb.baseUrl}/teams?offset=${offset}&limit=25`);

  }
  getEquipos(offset = 0){
    return this.http.get(`${environment.playFb.baseUrl}/teams?offset=${offset}&limit=25`);

  }
}
