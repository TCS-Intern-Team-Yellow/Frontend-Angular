import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpringbootService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  login(data: any){
    return this.httpClient.post(':8081/login/user/login', data)
  }

  signUp(data: any){
    return this.httpClient.post(':8081/login/user/signup', data)
  }

  getProductDetails(){
    return this.httpClient.get(':9000/product/details')
  }

  removeProduct(productId: any){
    return this.httpClient.delete(':9000/product/remove/'+productId)
  }

  addProduct(data: any){
    return this.httpClient.post(':9000/product/addproduct',data)
  }

  getProduct(productId: any){
    return this.httpClient.get(':9000/product/detail/'+productId)
  }
}
