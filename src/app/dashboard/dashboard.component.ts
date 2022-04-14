import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products=[];

  constructor(
    private httpClient: HttpClient,
    ) { }

  ngOnInit(): void {
    this.httpClient.get('http://localhost:9000/product/details').subscribe((data:any)=>{
      console.log(data);
      this.products=data;
      
    })
  }

}
