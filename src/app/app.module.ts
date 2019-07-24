import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PrintProductsComponent } from './print-products/print-products.component';
import { HomeComponent } from './home/home.component';
import { CartService } from './services/cart.service';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DataService } from './services/data.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CustomerDetailsFormComponent } from './customer-details-form/customer-details-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PrintProductsComponent,
    HomeComponent,
    AdminComponent,
    HeaderComponent,
    CheckoutComponent,
    ShoppingCartComponent,
    CustomerDetailsFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
