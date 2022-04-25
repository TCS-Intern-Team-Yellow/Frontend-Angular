import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpringbootService } from 'src/services/springboot.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  products=[];
  homeproducts: any;
  garmentsproducts: any;
  gadgetproducts: any;
  footwearproducts: any;

  constructor(
    private springboot: SpringbootService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.springboot.getProductDetails().subscribe((data:any)=>{
      console.log(data);
      this.products=data;
      this.homeproducts=data.filter((d: { category: string; })=> d.category =='HomeAppliance').slice(0,7)
      this.garmentsproducts=data.filter((d: { category: string; })=> d.category =='Garment').slice(0,7)
      this.gadgetproducts=data.filter((d: { category: string; })=> d.category =='Gadget').slice(0,7)
      this.footwearproducts=data.filter((d: { category: string; })=> d.category =='Footwear').slice(0,7)
    })
  }

  remove(productId:any){
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
