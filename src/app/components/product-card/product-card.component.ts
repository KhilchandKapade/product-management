import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  
  @Input() product!:Product;
  @Output()  viewProduct = new EventEmitter<number>();

  view(){
    console.log("vieww")
    this.viewProduct.emit(this.product.id);
  }

}
