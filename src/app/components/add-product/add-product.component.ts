import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product:Product={
    name: "",
    brand: "",
    image: "",
    currentPrice: 0 ,
    standardPrice: 0,
    discount: 0,
    id: 0,
  }
  productService = inject(ProductService);
  router = inject(Router)
  addProduct() {
    console.log("Form submitted", this.product);
  
    // Fetch existing products to determine the next ID
    this.productService.getProducts().subscribe(products => {
      const nextId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
      this.product.id = nextId; // Assign the next ID
  
      // Now add the product
      this.productService.addProduct(this.product).subscribe(result => {
        alert("Product Saved!");
        this.router.navigateByUrl("/");
      });
    });
  }
  

}
