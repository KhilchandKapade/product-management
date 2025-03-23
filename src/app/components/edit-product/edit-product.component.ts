
import { Component,inject,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {

    router = inject(Router);
    toasterService = inject(ToastrService);
    formBuilder = inject(FormBuilder);
    productService = inject(ProductService);
   activatedRoute= inject (ActivatedRoute);

    productForm:FormGroup= this.formBuilder.group({

      id:[''],
      name:['',[Validators.required,Validators.maxLength(50)]],
      brand:['',[Validators.required]],
      image:[''],
      currentPrice:[''],
      standardPrice:[''],
      discount:['']

    })
  

    ngOnInit(){
      const productId= Number (this.activatedRoute.snapshot.paramMap.get("id"));
      this.productService.getProductById(productId).subscribe(result=>{
        console.log("this is product by id",productId);
        this.productForm.patchValue(result);
  
      })
    }

  editProduct(){
    if(this.productForm.invalid){
      this.toasterService.error("please provide all filed with valid input");
      return;
    }
   
    console.log("form editedd",this.productForm.value);
    this.productService.updateProduct(this.productForm.value).subscribe(result=>{
      this.toasterService.success("product updated!!!");
    this.router.navigateByUrl("/");

    })
  }

}
