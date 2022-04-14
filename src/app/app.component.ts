import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private httpClient: HttpClient
  ){}
  title = 'shopper';

  getUserData(){
    this.httpClient.get('http://localhost:8081/login/user/userid/00f39177-b686-42a4-8eaa-8441b3a71580').subscribe((data)=>{
      console.log(data)
    })
  }
}
