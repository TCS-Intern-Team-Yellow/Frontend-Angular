import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpringbootService } from 'src/services/springboot.service';

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.css']
})
export class CategoryProductComponent implements OnInit {
  
  category!: string;
  products:any;

  constructor(
    private springboot: SpringbootService,
    private router: Router,
    ) { 
  }

  ngOnInit(): void {
    this.category=this.router.url.split('/').reverse()[0];
    this.springboot.getProductDetails().subscribe((data:any)=>{
      console.log(data);
      console.log(this.category);
      
      this.products=data.filter((d: { category: string; })=> d.category== this.category);
    })
  }

}
