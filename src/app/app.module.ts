import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
                                                                  // Add MatDividerModule
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import {MatInputModule} from '@angular/material/input';
import { provideHttpClient } from '@angular/common/http';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
 import {MatToolbarModule} from '@angular/material/toolbar'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';

import { ToastrModule } from 'ngx-toastr';
import { RupeePipe } from './rupee.pipe';  // ✅ CORRECT


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProductCardComponent,
    SearchComponent,
    ProductDetailComponent,
    AddProductComponent,
    EditProductComponent,
    RupeePipe,
  
    
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule, // Include MatDividerModule
    MatCardModule ,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule
    
  
  ],
  providers: [provideHttpClient(),],
  bootstrap: [AppComponent]
})
export class AppModule { }
