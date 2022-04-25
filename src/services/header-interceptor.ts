import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor() { }

  
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    
        return next.handle(httpRequest.clone({
          url: 'http://44.203.36.141'+httpRequest.url
         })).pipe(catchError(error => {
          return throwError(error);
        }));

    }

}
