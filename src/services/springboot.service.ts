import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpringbootService {
  httpOptions: any;

  constructor(
    private httpClient: HttpClient,
  ) { 
    this.httpOptions = {
 	 	headers: new HttpHeaders()
	}

    this.httpOptions.headers.append('Access-Control-Allow-Origin', '*');
   }


  login(data: any){
    return this.httpClient.post('login/user/login', data,this.httpOptions)
  }

  signUp(data: any){
    return this.httpClient.post('login/user/signup', data,this.httpOptions)
  }

  getProductDetails(){
    return this.httpClient.get('product/details',this.httpOptions)
  }

  removeProduct(productId: any){
    return this.httpClient.delete('product/remove/'+productId,this.httpOptions)
  }

  addProduct(data: any){
    return this.httpClient.post('product/addproduct',data,this.httpOptions)
  }

  getProduct(productId: any){
    return this.httpClient.get('product/detail/'+productId,this.httpOptions)
  }
}
