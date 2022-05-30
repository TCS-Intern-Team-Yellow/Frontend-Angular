import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor() { }

  
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    
        return next.handle(httpRequest.clone({
          url:'http://shopper-alb-808215322.us-east-1.elb.amazonaws.com/'+httpRequest.url,
          setHeaders:{
            'Access-Control-Allow-Origin':'*',
          }
         })).pipe(catchError(error => {
          return throwError(error);
        }));

    }

}
