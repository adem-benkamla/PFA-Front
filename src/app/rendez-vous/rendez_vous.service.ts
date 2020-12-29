import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { API_URLS} from '../config/api.url.config';
import {rendez_vous}   from '../shared/rendez_vous';

@Injectable()
export class RendezVousService{
  constructor(private http: HttpClient){

  }
getRendezVous(): Observable<any>{
  return this.http.get(API_URLS.RENDEZ_VOUS_URL);

}
addRendezVous(rendez_vous:rendez_vous): Observable<any>{
  return this.http.post(API_URLS.RENDEZ_VOUS_URL,rendez_vous);
}
updateRendezVous(rendez_vous:rendez_vous): Observable<any>{
    return this.http.put(API_URLS.RENDEZ_VOUS_URL,rendez_vous);
}
deleteRendezVous(idR:number):Observable<any>{
    return this.http.delete(API_URLS.RENDEZ_VOUS_URL+ `/${idR}`);
}
}
