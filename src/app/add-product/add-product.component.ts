import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import b64toBlob from 'b64-to-blob';
import { SpringbootService } from 'src/services/springboot.service';

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
    private router: Router
    ) { }

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
        "imageRef": this.selectedImage ? this.selectedImage : null
    }
    // data['imageRef'] = null;
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

OnFileSelected(imagefile:any) {
  
  const reader = new FileReader();
  reader.readAsDataURL(imagefile.target.files[0]);
  reader.onload = (event: any) => {
    this.selectedImage= event.target.result;
    console.log(this.selectedImage);
  };
}

}
