import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { ProductShippingComponent } from './product-shipping/product-shipping.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroesDashboardComponent } from './heroes-dashboard/heroes-dashboard.component';
import { HeroesMainComponent } from './heroes-main/heroes-main.component';
import { HeroesDetailComponent } from './heroes-detail/heroes-detail.component';
import { HeroGuard } from './hero.guard';

const routes: Routes = [
  { path: "", component: LandingComponent },
  { path: "heroes", component: HeroesComponent, canActivateChild: [ HeroGuard ],
    children: [
      { path: "detail/:id", component: HeroesDetailComponent },
      { path: "", component: HeroesMainComponent },
      { path: "dashboard", component: HeroesDashboardComponent },
    ]
  },
  { path: "about", component: AboutComponent },
  /*
  // My Store
  { path: "", component: ProductListComponent },
  { path: "products/:productId", component: ProductDetailsComponent },
  { path: "cart", component: ProductCartComponent },
  { path: "shipping", component: ProductShippingComponent },
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
