import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { API_URLS} from '../config/api.url.config';
import {user}   from '../user/user.model';
import { CrudService } from '../shared/crud.service';

@Injectable()
export class UserService implements CrudService{
  constructor(private http: HttpClient){

  }
getAll(): Observable<any>{
  return this.http.get(API_URLS.CRUD_URL);

}
add(User): Observable<any>{
  return this.http.post(API_URLS.CRUD_URL,User);
}
update(User): Observable<any>{
    return this.http.put(API_URLS.CRUD_URL,User);
}
delete(id):Observable<any>{
    return this.http.delete(API_URLS.CRUD_URL+'/${id}');
}
}
