import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerform!: FormGroup;
  loginform!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private httpClient: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerform = this.fb.group({
        "firstName":[''],
        "lastName": [''],
        "age": [''],
        "sex": [''],
        "address": [''],
        "emailId": [''],
        "phoneNumber": [''],
        "userType": [''],
        "password": [''],
    });
    this.loginform = this.fb.group({
      "emailId": [''],
      "password": [''],
  });

  }

  async Login() {
    let data = {
        "emailId": this.loginform.value.emailId,
        "password": this.loginform.value.password
    }
    console.log(data)
    this.httpClient.post('http://localhost:8081/login/user/login', data).subscribe((response:any) =>{
      console.log(response);
      if (response) {
          if (response.userId) {
              if (response.userType == "user") {
                  this.router.navigate(['/dashboard'])
              } else if (response.userType == "admin") {
                  this.router.navigate(['/adminDashboard'])
              }
          } else {
            const a=document.getElementById('alert')
            
            if(a){
              a.style.display = "block";
            }
          }
      } else {
        const a=document.getElementById('alert')
        if(a){
          a.style.display = "block";
          a.innerHTML = "Something wents wrong!"
        }
      }
    })
}

toggle(){
  const q=document.querySelectorAll('form')
  
  if(q){
    if(q[1].style.display=="block"){
      q[0].style.display="block"
      q[1].style.display="none"
    }else{
      q[1].style.display="block"
      q[0].style.display="none"
    }
  }
}

async SignUp() {
    let data = {
        "firstName": this.registerform.value.firstName,
        "lastName": this.registerform.value.lastName,
        "age": this.registerform.value.age,
        "sex": this.registerform.value.sex,
        "address": this.registerform.value.address,
        "emailId": this.registerform.value.emailId,
        "phoneNumber": this.registerform.value.phoneNumber,
        "userType": this.registerform.value.userType,
        "password": this.registerform.value.password
    }
    console.log(data)
    this.httpClient.post('http://localhost:8081/login/user/signup', data).subscribe((response:any)=>{
      console.log(response)
      if (response) {
        if (response['userId']) {
            if (response['userType'] == "user") {
                this.router.navigate(['/dashboard'])
            } else if (response['userType'] == "admin") {
                  this.router.navigate(['/adminDashboard'])
            }
        } else {
            const a=document.getElementById('alert')
            if(a){
              a.style.display = "block";
              a.innerHTML = "Something wents wrong!"
            }
        }
    } else {
      const a=document.getElementById('alert')
      if(a){
        a.style.display = "block";
        a.innerHTML = "Something wents wrong!"
      }
      }
    })
    }

}
