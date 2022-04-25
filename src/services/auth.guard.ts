import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private cookieService: CookieService,
    private router: Router
  ) { }
  canActivate(){
    console.log(this.cookieService.get('userId'));
    
    if(this.cookieService.get('userId')){
      return true
      
    }else{
      this.router.navigate(['/signup']);
      return false
    }
  }
  
}
