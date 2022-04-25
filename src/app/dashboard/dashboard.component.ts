import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
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
    private cookieService: CookieService,
    private router: Router
    ) { 
      if(this.cookieService.get('userType')=='admin'){
        this.router.navigate(['/adminDashboard'])
      }
    }

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

  logOut(){
    this.cookieService.deleteAll();
    this.router.navigate(['/signup']);
  }
}
