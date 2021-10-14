import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './products/components/product-component/product.component';
import { ProductListComponent } from './products/components/product-list/product-list.component';
import { CartListComponent } from './cart/components/cart-list/cart-list.component';
import {CartItemComponent} from "./cart/components/cart-item/cart-item.component";
import { HeaderModule} from "./header/header.module";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    CartListComponent,
    CartItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HeaderModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
