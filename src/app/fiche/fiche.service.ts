import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { API_URLS} from '../config/api.url.config';
import {fiche}   from '../shared/fiche';

@Injectable()
export class FicheService{
  constructor(private http: HttpClient){

  }
getFiche(): Observable<any>{
  return this.http.get(API_URLS.FICHE_URL);

}
addFiche(fiche:fiche): Observable<any>{
  return this.http.post(API_URLS.FICHE_URL,fiche);
}
updateFiche(fiche:fiche): Observable<any>{
    return this.http.put(API_URLS.FICHE_URL,fiche);
}
deleteFiche(id:number):Observable<any>{
    return this.http.delete(API_URLS.FICHE_URL+'/${id}');
}
}
