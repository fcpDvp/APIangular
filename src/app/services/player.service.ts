import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient){}

  getPlayerList(offset = 0){
    return this.http.get(`${environment.playFb.baseUrl}/players?offset=${offset}&limit=25`);

  }
}
