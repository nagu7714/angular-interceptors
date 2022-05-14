import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // cannot modify default request so need to clone if we want to modify or add any http request headers.
    const API_KEY ='test123' // open a network tab and check the  request header for this url. API_KEY heaader should be added
    const req=request.clone({
     setHeaders:{
       API_KEY
     }
    });
    return next.handle(req);
  }
}
