import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor() { }

  
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    
        return next.handle(httpRequest.clone({
          url: 'http://ip-10-0-143-117.ec2.internal'+httpRequest.url
         })).pipe(catchError(error => {
          return throwError(error);
        }));

    }

}
