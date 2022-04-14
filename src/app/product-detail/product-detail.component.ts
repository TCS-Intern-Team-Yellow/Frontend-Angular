import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productId!: number;
  product:any;
  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.productId=parseInt(this.router.url.split('/').reverse()[0]);
    this.httpClient.get('http://localhost:9000/product/detail/'+this.productId).subscribe((data)=>{
      console.log(data);
      this.product=data;
    })
  }

}
