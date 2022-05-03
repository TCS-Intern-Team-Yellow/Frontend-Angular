import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from  '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CategoryProductComponent } from './category-product/category-product.component';
import { HeaderInterceptor } from 'src/services/header-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    AdminDashboardComponent,
    DashboardComponent,
    AddProductComponent,
    ProductDetailComponent,
    CategoryProductComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
