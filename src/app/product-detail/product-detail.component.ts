import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpringbootService } from 'src/services/springboot.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productId!: number;
  product:any;
  constructor(
    private springboot: SpringbootService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.productId=parseInt(this.router.url.split('/').reverse()[0]);
    this.springboot.getProduct(this.productId).subscribe((data)=>{
      console.log(data);
      this.product=data;
    })
  }

}
