import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { MyStoreComponent } from './my-store/my-store.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    MyStoreComponent,
    ProductListComponent,
    ProductAlertsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    // AppComponent,
    MyStoreComponent
  ]
})
export class AppModule { }
