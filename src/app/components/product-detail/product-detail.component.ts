import { Component,inject, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product.service';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

   product!:Product;
   productService = inject(ProductService);
   activatedRoute = inject (ActivatedRoute);

  ngOnInit(){
    const productId= Number (this.activatedRoute.snapshot.paramMap.get("id"));
    this.productService.getProductById(productId).subscribe(result=>{
      console.log("this is product by id",productId);
      this.product=result;

    })

  }
}
