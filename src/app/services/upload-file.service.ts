import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URLS} from '../config/api.url.config';
@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private http: HttpClient) { }

  /*saveFile(file: FormData): Observable<HttpEvent<any>> {
    //const formData: FormData = new FormData();

    //formData.append('file', file);
    console.log(file);

    const req = new HttpRequest('POST', `${this.baseUrl}/uploadFiles`, file, {
      reportProgress: true,
      responseType: 'json'


    });

    return this.http.request(req);
  }*/

  getFiles(): Observable<any> {
    return this.http.get(API_URLS.GET_URL);
  }
  saveFile(file: FormData): Observable<any>{
    return this.http.post(API_URLS.UPLOAD_URL,file);
  }
  downloadFile(id:number): Observable<any>{
    return this.http.get(API_URLS.DOW_URL+'/'+id,{responseType: 'blob' as 'json'});
  }


}
