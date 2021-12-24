import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"
import { ReactiveFormsModule, FormsModule } from "@angular/forms"
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
import { HeroesMainComponent } from './heroes-main/heroes-main.component';
import { HeroesDetailComponent } from './heroes-detail/heroes-detail.component';
import { HeroesMessagesComponent } from './heroes-messages/heroes-messages.component';
import { HeroesDashboardComponent } from './heroes-dashboard/heroes-dashboard.component';

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
    HeroesMainComponent,
    HeroesDetailComponent,
    HeroesMessagesComponent,
    HeroesDashboardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    // MyStoreComponent
  ]
})
export class AppModule { }
