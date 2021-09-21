import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  constructor(private http: HttpClient){}

  getLeagueList(offset = 0){
    return this.http.get(`${environment.playFb.baseUrl}/leagues?offset=${offset}&limit=25`);
    //En caso de que los datos se muestran en cosola dentro de una variable result
    //.pipe(
    //  map(result=>{ return result['Nombre De La Liga'] }));
  }
}
