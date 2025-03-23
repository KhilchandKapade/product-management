import { Component, inject } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { SearchComponent } from '../search/search.component';
import { ProductService } from 'src/app/product.service';
import { Product } from 'src/app/types/product';
import { Router } from '@angular/router';

{ SearchComponent }
{ ProductCardComponent }
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  products: Product[] = []
  filteredProduct: Product[] = [];
  productService = inject(ProductService);
  router = inject(Router);

  ngOnInit() {
    this.productService.getProducts().subscribe((result) => {
      console.log(result);
      this.products = result ;
      this.filteredProduct = this.products;
    }) 
  }

  onViewProduct(productId: number) {
    console.log("on view product", productId);
    this.router.navigateByUrl("/product/"+productId)
  }


  onSearch(search: string) {
    console.log("home", search)
    if (search) {
      this.filteredProduct = this.products.filter(x => x.name.toLowerCase().includes(search.toLowerCase()));
    } else {
      this.filteredProduct = this.products;
    }
  }
}

