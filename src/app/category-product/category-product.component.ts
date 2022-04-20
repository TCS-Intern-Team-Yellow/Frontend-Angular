import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.css']
})
export class CategoryProductComponent implements OnInit {
  
  category!: string;
  products:any;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    ) { 
  }

  ngOnInit(): void {
    this.category=this.router.url.split('/').reverse()[0];
    this.httpClient.get('http://localhost:9000/product/details').subscribe((data:any)=>{
      console.log(data);
      console.log(this.category);
      
      this.products=data.filter((d: { category: string; })=> d.category== this.category);
    })
  }

}
