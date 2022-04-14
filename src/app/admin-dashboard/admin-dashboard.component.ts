import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

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

  remove(productId:any){
    this.httpClient.delete('http://localhost:9000/product/remove/'+productId).subscribe((data:any)=>{
      console.log(data);
      this.ngOnInit()
      
    })
  }

}
