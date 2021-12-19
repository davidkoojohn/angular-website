import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"
import { ReactiveFormsModule } from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app/app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { MyStoreComponent } from './my-store/my-store.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { ProductShippingComponent } from './product-shipping/product-shipping.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    MyStoreComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    ProductCartComponent,
    ProductShippingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    // MyStoreComponent
  ]
})
export class AppModule { }
