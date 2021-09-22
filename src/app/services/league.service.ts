import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Liga } from 'src/app/class/league';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  // Para guardar
  private onSaveSuccessSubject = new Subject<Liga>();
  //public onSaveSuccess = this.onSaveSuccessSubject.asObservable();
  // Para eliminar
  private onDeleteSuccessSubject = new Subject<number>();
  //public onDeleteSuccess = this.onDeleteSuccessSubject.asObservable();
  constructor(private http: HttpClient){}

  getLeagueList(offset = 0){
    return this.http.get(`${environment.playFb.baseUrl}/leagues?offset=${offset}&limit=25`);
    //En caso de que los datos se muestran en cosola dentro de una variable result
    //.pipe(
    //  map(result=>{ return result['Nombre De La Liga'] }));
  }

  getLeagueDet(index: string){
    return this.http
    .get(`${environment.playFb.baseUrl}/leagues/${index}`);
  }

  emitSaveSuccess(liga: Liga){
    this.onSaveSuccessSubject.next(liga);
  }

  emitDeleteSuccess(ligaId: string){
    //this.onDeleteSuccessSubject.next(ligaId);
  }

  getLigas() {
    return this.http.get<Array<Liga>>(`${environment.playFb.baseUrl}/leagues`);
  }

  getLiga(ligaId: string) {
    return this.http.get<Array<Liga>>(`${environment.playFb.baseUrl}/leagues`);
    //return lig = Liga.prototype.Identificador.match(ligaId);
    //return this.http.get<Liga>(`${environment.playFb.baseUrl}/leagues/` + ligaId);
  }

  saveLiga(liga: Liga) {
    return this.http.post<Liga>(environment.playFb.baseUrl + '/leagues/', liga);
  }

  deleteLiga(ligaId: string) {
    return this.http.delete(`${environment.playFb.baseUrl}/leagues/` + ligaId);
  }
}
