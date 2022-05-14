import { Injectable } from '@angular/core';

import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
 
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  baseURL: string = "https://api.github.com/";


  constructor(private http: HttpClient) { }

  getRepos(userName: string): Observable<any> {
    return this.http.get(this.baseURL + 'users/' + userName + '/repos')
  }

  getUsers():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
