import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { ProductShippingComponent } from './product-shipping/product-shipping.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: "", component: LandingComponent }
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
