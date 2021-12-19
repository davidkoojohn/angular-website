import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { MyStoreComponent } from './my-store/my-store.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { ProductCartComponent } from './product-cart/product-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    MyStoreComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    ProductCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /*RouterModule.forRoot([
      { path: "", component: ProductListComponent },
      { path: "products/:productId", component: ProductDetailsComponent },
    ])*/
  ],
  providers: [],
  bootstrap: [
    // AppComponent,
    MyStoreComponent
  ]
})
export class AppModule { }
