import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { API_URLS} from '../config/api.url.config';
import {facture}   from '../shared/facture';

@Injectable()
export class FactureService{
  constructor(private http: HttpClient){

  }
getFacture(): Observable<any>{
  return this.http.get(API_URLS.FACTURE_URL);

}
addFacture(facture:facture): Observable<any>{
  return this.http.post(API_URLS.FACTURE_URL,facture);
}
updateFacture(facture:facture): Observable<any>{
    return this.http.put(API_URLS.FACTURE_URL,facture);
}
deleteFacture(idF:number):Observable<any>{
    return this.http.delete(API_URLS.FACTURE_URL+'/${idF}');
}
}
