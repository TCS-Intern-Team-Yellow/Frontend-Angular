import { Component, OnInit } from '@angular/core';
import { SpringbootService } from 'src/services/springboot.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products=[];
  homeproducts=[];
  garmentsproducts=[];
  gadgetproducts=[];
  footwearproducts=[];

  constructor(
    private sprigboot: SpringbootService,
    ) { }

  ngOnInit(): void {
    this.sprigboot.getProductDetails().subscribe((data:any)=>{
      console.log(data);
      this.products=data;
      this.homeproducts=data.filter((d: { category: string; })=> d.category =='HomeAppliance').slice(0,7)
      this.garmentsproducts=data.filter((d: { category: string; })=> d.category =='Garment').slice(0,7)
      this.gadgetproducts=data.filter((d: { category: string; })=> d.category =='Gadget').slice(0,7)
      this.footwearproducts=data.filter((d: { category: string; })=> d.category =='Footwear').slice(0,7)
      
    })
  }

}