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
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { SpyDirective } from './directive/spy.directive';
import { AboutInfoComponent } from './about-info/about-info.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    MyStoreComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    ProductCartComponent,
    ProductShippingComponent,
    LandingComponent,
    AboutComponent,
    SpyDirective,
    AboutInfoComponent,
    HeroesComponent,
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
