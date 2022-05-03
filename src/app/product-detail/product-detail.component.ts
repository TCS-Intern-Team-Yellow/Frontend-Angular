import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SpringbootService } from 'src/services/springboot.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  isAdmin=false;
  productId!: number;
  product:any;
  constructor(
    private springboot: SpringbootService,
    private router: Router,
    private cookieService: CookieService
  ) { 
    if(this.cookieService.get('userType')=='admin'){
      this.isAdmin=true;
    }
  }

  ngOnInit(): void {
    this.productId=parseInt(this.router.url.split('/').reverse()[0]);
    this.springboot.getProduct(this.productId).subscribe((data)=>{
      console.log(data);
      this.product=data;
    })
  }

  delete(productId:any){
    this.springboot.removeProduct(productId).subscribe((data:any)=>{
      console.log(data);
      if(data){
        this.router.navigate(['/adminDashboard'])
      }else{
        console.log("error");
        
      }     
    })
  }

}
