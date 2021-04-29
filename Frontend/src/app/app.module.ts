import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { SendService } from './send.service';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { CartService } from './cart.service';
import { OrderService } from './order.service';
import { ProductsService } from './products.service';
import { NavbarComponent } from './navbar/navbar.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ShowItemComponent } from './show-item/show-item.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'',component:ProductsComponent},
      {path:'login',component:LoginComponent},
      {path:'signup',component:SignupComponent},
      {path:'cart',component:CartComponent},
      {path:'order',component:OrderComponent},
      {path:'add',component:AddProductComponent},
      {path:'product',component:ShowItemComponent}
    ])

  ],
  declarations: [
    AppComponent,
    LoginComponent,
    ProductsComponent,
    CartComponent,
    OrderComponent,
    SignupComponent,
    NavbarComponent,
    AddProductComponent,
    ShowItemComponent
  ],
  providers: [
     AuthService,
     CartService,
     OrderService,
     ProductsService,
     { provide: HTTP_INTERCEPTORS, useClass: SendService, multi: true }
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
