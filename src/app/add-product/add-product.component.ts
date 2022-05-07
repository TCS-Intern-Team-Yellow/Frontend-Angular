import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SpringbootService } from 'src/services/springboot.service';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productform!: FormGroup;
  selectedImage:any=null;

  constructor(
    private fb: FormBuilder,
    private springboot: SpringbootService,
    private cookieService: CookieService,
    private router: Router
    ) { 
      if(this.cookieService.get('userType')!='admin'){
        this.router.navigate(['/dashboard'])
      }
    }

  ngOnInit(): void {
    this.productform=this.fb.group({
      "name": [''],
        "description": [''],
        "category": [''],
        "subCategory": [''],
        "unitPrice": [''],
        "quantity": [''],
    });
  }

  Add(){

    let data = {
        "name": this.productform.value.name,
        "description": this.productform.value.description,
        "category": this.productform.value.category,
        "subCategory": this.productform.value.subCategory,
        "unitPrice": this.productform.value.unitPrice,
        "quantity": this.productform.value.quantity,
        "imageRef": ''
    }
    this.savetoS3(this.selectedImage);
    data['imageRef']='https://shopper-tcsyellow.s3.amazonaws.com/'+this.selectedImage.name
    
    console.log(data)
    this.springboot.addProduct(data).subscribe(response=>{
      console.log(response);
      
      if (response) {
          this.router.navigate(['/adminDashboard'])
      } else {
          alert("somthing wents wrong!");
      }
    })
}

async OnFileSelected(imagefile:any) {  
    this.selectedImage= imagefile.target.files[0];
}

async savetoS3(file: any){
  const contentType = file.type;
    const bucket = new S3(
          {
              accessKeyId: ,
              secretAccessKey: ,
              region: 'us-east-1'
          }
      );
      const params = {
          Bucket: 'shopper-tcsyellow',
          Key: file.name,
          Body: file,
          ACL: 'public-read',
          ContentType: contentType
      };
      
      bucket.upload(params,  function (err: any, data: any) {
          if (err) {
              console.log('There was an error uploading your file: ', err);
              return false;
          }
          console.log('Successfully uploaded file.', data);
          return true;
      });
}

}
