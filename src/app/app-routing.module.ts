import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductCartComponent } from './product-cart/product-cart.component';

const routes: Routes = [
  { path: "", component: ProductListComponent },
  { path: "products/:productId", component: ProductDetailsComponent },
  { path: "cart", component: ProductCartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
